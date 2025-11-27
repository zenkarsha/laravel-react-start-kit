import { Fragment, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import * as R from "ramda";

// 遞歸類型定義，允許任意嵌套的 wording 結構
type WordingData =
    | string
    | number
    | boolean
    | WordingData[]
    | { [key: string]: WordingData };

type WordingSource = string | Record<string, WordingData>;

let _wording: Record<string, WordingData> | null = null;

export const loadWordingJson = (source: WordingSource): Promise<void> => {
    if (typeof source === "string") {
        return new Promise((resolve, reject) => {
            axios(source)
                .then((r) => r.data)
                .then((data) => {
                    _wording = data;
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        });
    } else {
        _wording = source;
        return Promise.resolve();
    }
};

export const useWordingLoader = (source: WordingSource): boolean => {
    const isSourceObject = typeof source === "object";

    if (isSourceObject) {
        _wording = source;
    }

    const [wordingLoaded, setWordingLoaded] = useState(isSourceObject);

    useEffect(() => {
        if (typeof source === "string") {
            loadWordingJson(source).then(() => setWordingLoaded(true));
        }
    }, [source]);

    return wordingLoaded;
};

export const _w = (...path: (string | string[])[]): WordingData | undefined => {
    if (!_wording) return undefined;

    let pathArray: string[];
    if (path.length === 1) {
        pathArray = typeof path[0] === "string" ? path[0].split(".") : path[0];
    } else {
        pathArray = path as string[];
    }

    let value: WordingData = (R.path(pathArray, _wording) as WordingData) || "";

    if (typeof value === "string") {
        value = decodeArrowValue(value) as string;
        const proto = {
            currentValue: value,
            nl2br: () => nl2br(value as string),
            nl2p: () => nl2p(value as string),
            nl2array: () => nl2array(value as string),
            param: (key: string, replacedValue: string) =>
                param(value as string, key, replacedValue),
        };
        (value as any).__proto__ = proto;
    }

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        value = decodeArrowValueFromObject(
            value as Record<string, WordingData>
        );
    }

    return value;
};

const decodeArrowValueFromObject = (
    obj: Record<string, WordingData>
): Record<string, WordingData> => {
    Object.keys(obj).forEach((key) => {
        const val = obj[key];
        obj[key] = decodeArrowValue(val);
        if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
        ) {
            obj[key] = decodeArrowValueFromObject(
                obj[key] as Record<string, WordingData>
            );
        }
    });
    return obj;
};

const decodeArrowValue = (value: WordingData): WordingData => {
    if (typeof value === "string" && value.indexOf("=>") === 0) {
        return _w(...value.replace("=>", "").split(".")) || value;
    }
    return value;
};

export const param = (search: string, key: string, value: string): string => {
    const replaceReg = new RegExp(`\\$\\{${key}\\}`, "g");
    const currentProto = (search as any).__proto__;
    const currentValue = currentProto?.currentValue || search;
    const rtn = currentValue.replace(replaceReg, value);
    (search as any).__proto__ = { ...currentProto, currentValue: rtn };
    return rtn;
};

export const nl2br = (str: string | null | undefined): ReactNode[] | null => {
    if (str === null || str === undefined) return null;

    if (
        navigator.userAgent.match("MSIE") ||
        navigator.userAgent.match(".NET")
    ) {
        return [str];
    }

    str = str.replace?.(/\\n/g, "\n");
    return (
        str?.split?.("\n").map((item, key) => {
            return (
                <Fragment key={"nl2br" + key}>
                    {item}
                    <br />
                </Fragment>
            );
        }) || null
    );
};

export const nl2p = (str: string | null | undefined): ReactNode[] | null => {
    if (str === null || str === undefined) return null;
    str = str.replace?.(/\\n/g, "\n");

    return (
        str?.split?.("\n").map((item, key) => {
            const content: ReactNode =
                item !== "" ? item : <br key={`br-${key}`} />;
            return <p key={"nl2p" + key}>{content}</p>;
        }) || null
    );
};

export const nl2array = (str: string | null | undefined): string[] => {
    if (str === null || str === undefined) return [];
    str = str.replace?.(/\\n/g, "\n");
    return str?.split?.("\n") || [];
};

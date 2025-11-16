import React, { useMemo } from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { InertiaProgress } from "@inertiajs/progress";
import GlobalStyle from "@/components/GlobalStyle";
import { useWordingLoader } from "@/utils/wordingSystem";

const AppWrapper = ({ children }) => {
    const lang = useMemo(() => document.documentElement.lang || "zh-Hant", []);
    const wordingVersion = useMemo(
        () =>
            document
                .getElementById("version")
                .getAttribute("data-wording-version") || "1.0.0",
        []
    );

    const wordingLoaded = useWordingLoader(
        `/wordings/${lang}.json?v=${wordingVersion}`
    );

    if (!wordingLoaded) {
        return <div>loading...</div>;
    }

    return children;
};

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}/index.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <GlobalStyle />
                <AppWrapper>
                    <App {...props} />
                </AppWrapper>
            </React.StrictMode>
        );
    },
});

InertiaProgress.init();

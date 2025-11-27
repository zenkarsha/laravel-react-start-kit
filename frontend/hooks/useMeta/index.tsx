import { useEffect } from "react";
import { usePage } from "@inertiajs/react";

interface Meta {
    title?: string;
    description?: string;
    canonical?: string;
    url?: string;
    type?: string;
    image?: string;
}

export const useMeta = (meta: Meta = {}): void => {
    const { meta: pageMeta } = usePage().props as { meta?: Meta };

    useEffect(() => {
        const finalMeta: Meta = { ...pageMeta, ...meta };

        // 更新 title
        if (finalMeta.title) {
            document.title = finalMeta.title;
        }

        // 更新或創建 meta tags
        const updateMetaTag = (
            name: string,
            content: string,
            attribute: string = "name"
        ): void => {
            let element = document.querySelector(
                `meta[${attribute}="${name}"]`
            ) as HTMLMetaElement | null;
            if (!element) {
                element = document.createElement("meta");
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        // 更新 description
        if (finalMeta.description) {
            updateMetaTag("description", finalMeta.description);
        }

        // 更新 canonical
        if (finalMeta.canonical) {
            let canonical = document.querySelector(
                "link[rel='canonical']"
            ) as HTMLLinkElement | null;
            if (!canonical) {
                canonical = document.createElement("link");
                canonical.setAttribute("rel", "canonical");
                document.head.appendChild(canonical);
            }
            canonical.setAttribute("href", finalMeta.canonical);
        }

        // 更新 Open Graph tags
        if (finalMeta.title) {
            updateMetaTag("og:title", finalMeta.title, "property");
        }
        if (finalMeta.description) {
            updateMetaTag("og:description", finalMeta.description, "property");
        }
        if (finalMeta.type) {
            updateMetaTag("og:type", finalMeta.type, "property");
        }
        if (finalMeta.url) {
            updateMetaTag("og:url", finalMeta.url, "property");
        }
        if (finalMeta.image) {
            // Ensure image URL is absolute
            const imageUrl = finalMeta.image.startsWith("http")
                ? finalMeta.image
                : `${window.location.origin}${finalMeta.image}`;
            updateMetaTag("og:image", imageUrl, "property");
            updateMetaTag("og:image:width", "1200", "property");
            updateMetaTag("og:image:height", "630", "property");
        }

        // 更新 Twitter tags
        if (finalMeta.title) {
            updateMetaTag("twitter:title", finalMeta.title);
        }
        if (finalMeta.description) {
            updateMetaTag("twitter:description", finalMeta.description);
        }
        if (finalMeta.url) {
            updateMetaTag("twitter:url", finalMeta.url);
        }
        if (finalMeta.image) {
            // Ensure image URL is absolute
            const imageUrl = finalMeta.image.startsWith("http")
                ? finalMeta.image
                : `${window.location.origin}${finalMeta.image}`;
            updateMetaTag("twitter:image", imageUrl);
        }
    }, [pageMeta, meta]);
};

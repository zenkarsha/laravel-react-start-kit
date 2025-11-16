import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { InertiaProgress } from "@inertiajs/progress";
import GlobalStyle from "@/components/GlobalStyle";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}/index.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <>
                <React.StrictMode>
                    <GlobalStyle />
                    <App {...props} />
                </React.StrictMode>
            </>
        );
    },
});

InertiaProgress.init();

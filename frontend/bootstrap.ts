import axios from "axios";

declare global {
    interface Window {
        axios: typeof axios;
    }
}

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");
if (csrfToken) {
    window.axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
}

window.axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 419) {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content");
            if (csrfToken) {
                window.axios.defaults.headers.common["X-CSRF-TOKEN"] =
                    csrfToken;
                return window.axios.request(error.config);
            } else {
                if (confirm("Session is expired, reload page?")) {
                    window.location.reload();
                }
            }
        }
        return Promise.reject(error);
    }
);

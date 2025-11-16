import axios from "axios";
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;
if (csrfToken) {
    window.axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
}

window.axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 419) {
            const csrfToken = document.querySelector(
                'meta[name="csrf-token"]'
            )?.content;
            if (csrfToken) {
                window.axios.defaults.headers.common["X-CSRF-TOKEN"] =
                    csrfToken;
                return window.axios.request(error.config);
            } else {
                if (confirm("Session 已過期，是否重新載入頁面？")) {
                    window.location.reload();
                }
            }
        }
        return Promise.reject(error);
    }
);

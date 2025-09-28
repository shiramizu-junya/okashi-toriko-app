/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SNACK_SEARCH_API_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

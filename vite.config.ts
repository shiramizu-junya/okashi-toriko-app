import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://sysbird.jp', // /apiで始まるすべてのリクエストをプロキシ対象にする
                changeOrigin: true, // すべてのAPIリクエストがこのサーバーに転送される。リクエストのOriginヘッダーを転送先に合わせて変更。CORS問題の回避に必要
                rewrite: (path) => `/toriko/webapi${path.replace(/^\/api/, '')}`, // URLパスを変換する関数。/api/users → /toriko/webapi/users に変換
                secure: true, // HTTPS証明書の検証を有効にする
                headers: {
                    'User-Agent':
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                    Accept: 'application/json, text/plain, */*',
                    'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8',
                }, // 転送時に追加するHTTPヘッダー
            },
        },
    },
});

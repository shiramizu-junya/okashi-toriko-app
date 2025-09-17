import './App.css';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import type { SnackType, ResponseType } from './types/type';
import { getSafeString } from './utils/util';

const App = () => {
    const [snacks, setSnacks] = useState<SnackType[]>([]);

    useEffect(() => {
        // APIからお菓子データを取得する処理
        const fetchSnacks = async () => {
            try {
                const apiParams = new URLSearchParams({
                    apikey: 'guest',
                    format: 'json',
                    type: '99', // お菓子の種類ID
                    max: '10', // 取得件数
                    offset: '0', // 取得開始位置
                });

                const originalApiUrl = `https://www.sysbird.jp/webapi/?${apiParams.toString()}`;

                const proxyApiUrl = `${import.meta.env.VITE_SNACK_SEARCH_API_BASE_URL}${encodeURIComponent(originalApiUrl)}`;

                const response = await fetch(proxyApiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const contents: ResponseType = JSON.parse(
                    JSON.parse(await response.text()).contents
                );
                setSnacks(contents.item);
            } catch (error) {
                console.error('Error fetching snacks:', error);
            }
        };

        fetchSnacks();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* メインコンテンツ */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* フィルター・検索エリア */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center lg:justify-between">
                        <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                スナック
                            </button>
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                                チョコレート
                            </button>
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                                クッキー
                            </button>
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                                キャンディー
                            </button>
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                                せんべい
                            </button>
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                                限定お菓子
                            </button>
                        </div>
                        <div className="relative w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="お菓子を検索..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            />
                            <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
                        </div>
                    </div>
                </div>

                {/* お菓子一覧グリッド */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                    {snacks.map((snack) => {
                        return (
                            <div
                                key={snack.id}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group w-full max-w-sm"
                            >
                                {/* 商品画像 */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={snack.image}
                                        alt={snack.name}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                            {getSafeString(snack.type) || '不明'}
                                        </span>
                                    </div>
                                </div>

                                {/* 商品情報 */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {snack.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {snack.comment}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-blue-600">
                                            {getSafeString(snack.price)
                                                ? `¥${snack.price}`
                                                : '価格未定'}
                                        </span>
                                        <a
                                            href={snack.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block text-center no-underline"
                                        >
                                            詳細を見る
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* もっと見るボタン */}
                <div className="text-center mt-12">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                        もっと見る
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;

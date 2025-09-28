import './App.css';
import { useEffect, useMemo, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import type { SnackCategoryType, SnackType } from './types/type';
import { Searcher } from './components/Searcher';
import { SnackList } from './components/SnackList';
import { fetchSnacks } from './api/fetchSnacksApi';
import { LoadingSpinner } from './components/Spinner';
import { MoreButton } from './components/MoreButton';

export const ITEMS_PER_PAGE = 20;

const App = () => {
    const [snacks, setSnacks] = useState<SnackType[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState<SnackCategoryType>('all');

    // 初回ロード時にお菓子データを取得
    useEffect(() => {
        console.log('useEffectが実行されました');
        const fetchData = async () => {
            setLoading(true);
            const result = await fetchSnacks('0');
            if (result.length) {
                setSnacks(result);
            } else {
                setHasMore(false);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // もっと見るボタンのクリックハンドラー
    const handleLoadMore = async () => {
        setLoading(true);
        const newOffset = offset + ITEMS_PER_PAGE;
        const result = await fetchSnacks(String(newOffset));
        if (result.length) {
            setSnacks((prevSnacks) => [...prevSnacks, ...result]);
            setOffset(newOffset);
        }
        // 次のデータがない場合はもっと見るボタンを非表示にする
        else {
            setHasMore(false);
        }
        setLoading(false);
    };

    const filteredSnacks = useMemo(() => {
        console.log('useMemoが実行されました');
        if (category === 'all') return snacks;

        return snacks.filter((snack) => {
            switch (category) {
                case 'snack':
                    return snack.type === 'snack';
                case 'chocolate':
                    return snack.type === 'chocolate';
                case 'cookie':
                    return snack.type === 'cookie';
                case 'candy':
                    return snack.type === 'candy';
                case 'senbei':
                    return snack.type === 'senbei';
                case 'limited':
                    return typeof snack.type === 'object';
                default:
                    return true;
            }
        });
    }, [snacks, category]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Searcher category={category} onChangeCategory={setCategory} />
                {loading && !snacks.length ? (
                    // 初回ロード時のみ中央にスピナー表示
                    <LoadingSpinner />
                ) : (
                    <SnackList snacks={filteredSnacks} />
                )}
                {hasMore && snacks.length && (
                    <MoreButton loading={loading} handleLoadMore={handleLoadMore} />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;

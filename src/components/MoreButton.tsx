import { Spinner } from './Spinner';

/** もっと見るボタン */
export const MoreButton = ({
    loading,
    handleLoadMore,
}: {
    loading: boolean;
    handleLoadMore: () => Promise<void>;
}) => {
    return (
        <div className="text-center mt-12">
            <button
                onClick={handleLoadMore}
                disabled={loading}
                className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors"
            >
                {loading && <Spinner className="h-4 w-4" />}
                {loading ? '読み込み中…' : 'もっと見る'}
            </button>
        </div>
    );
};

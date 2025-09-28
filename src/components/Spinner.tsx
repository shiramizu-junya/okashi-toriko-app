// 共通ローディングスピナー
export const Spinner = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" aria-hidden="true">
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
        />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
);

// 初回ロード時の中央スピナー
export const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-16">
        <Spinner />
        <span className="ml-3 text-gray-600">読み込み中…</span>
    </div>
);

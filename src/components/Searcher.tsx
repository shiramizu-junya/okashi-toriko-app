import type { SnackCategoryType } from '@/types/type';

const SELECT_SNACK_LIST: { name: string; value: SnackCategoryType }[] = [
    {
        name: '全て',
        value: 'all',
    },
    {
        name: 'スナック',
        value: 'snack',
    },
    {
        name: 'チョコレート',
        value: 'chocolate',
    },
    {
        name: 'クッキー',
        value: 'cookie',
    },
    {
        name: 'キャンディー',
        value: 'candy',
    },
    {
        name: 'せんべい',
        value: 'senbei',
    },
    {
        name: '限定お菓子',
        value: 'limited',
    },
];

/** 検索エリア */
export const Searcher = ({
    category,
    onChangeCategory,
}: {
    category: SnackCategoryType;
    onChangeCategory: React.Dispatch<React.SetStateAction<SnackCategoryType>>;
}) => {
    return (
        <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center lg:justify-between">
                {/* カテゴリボタン群 */}
                <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                    {SELECT_SNACK_LIST.map((item) => {
                        return (
                            <button
                                key={item.value}
                                onClick={() => onChangeCategory(item.value)}
                                className={[
                                    'px-4 py-2 rounded-lg transition-colors',
                                    item.value === category
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                                ].join(' ')}
                                aria-pressed={item.value === category}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </div>

                <div className="relative w-full w-64">
                    <input
                        type="text"
                        placeholder="お菓子を検索..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                    />
                    <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
                </div>
            </div>
        </div>
    );
};

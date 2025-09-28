import DOMPurify from 'dompurify';
import type { SnackType } from '../types/type';
import { getSafeString } from '../utils/util';

export const SnackCard = ({ snack }: { snack: SnackType }) => {
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
                    className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {getSafeString(snack.type) || '限定お菓子'}
                    </span>
                </div>
            </div>

            {/* 商品情報 */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{snack.name}</h3>
                <p
                    className="text-gray-600 text-sm mb-3 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(snack.comment) }}
                />

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                        {getSafeString(snack.price) ? `¥${snack.price}` : '価格未定'}
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
};

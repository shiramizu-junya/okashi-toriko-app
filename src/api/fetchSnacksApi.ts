import { ITEMS_PER_PAGE } from '../App';
import type { ResponseType } from '../types/type';

// APIからお菓子データを取得する処理
export const fetchSnacks = async (offset: string) => {
    try {
        const apiParams = new URLSearchParams({
            apikey: 'guest',
            format: 'json',
            type: '99', // お菓子の種類ID
            max: String(ITEMS_PER_PAGE), // 取得件数
            offset: offset, // 取得開始位置
        }).toString();

        const proxyApiUrl = `${import.meta.env.VITE_SNACK_SEARCH_API_BASE_URL}${encodeURIComponent(`https://www.sysbird.jp/webapi/?${apiParams}`)}`;

        const response = await fetch(proxyApiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contents: ResponseType = JSON.parse(JSON.parse(await response.text()).contents);
        return contents.item ?? [];
    } catch (error) {
        console.error('Error fetching snacks:', error);
        return [];
    }
};

export type SnackType = {
    area: string;
    comment: string;
    id: string;
    image: string;
    kana: string | { [key: string]: string };
    maker: string;
    name: string;
    price: string | { [key: string]: string };
    regist: string;
    tags?: { tag: string[] };
    type: string | { [key: string]: string };
    url: string;
};

export type ResponseType = {
    count: string;
    item: SnackType[];
    status: string;
};

export type SnackCategoryType =
    | 'all'
    | 'snack'
    | 'chocolate'
    | 'cookie'
    | 'candy'
    | 'senbei'
    | 'limited';

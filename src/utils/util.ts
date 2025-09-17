export const getSafeString = (value: string | object | undefined): string => {
    if (typeof value === 'string') {
        return value;
    }
    return '';
};

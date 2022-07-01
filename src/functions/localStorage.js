export const getItem = (key) => {
    if (localStorage.getItem(key) !== null) {
        return JSON.parse(localStorage.getItem(key));
    }
    return undefined;
};


export const setItem = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
};



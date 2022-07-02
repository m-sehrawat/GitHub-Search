export const getItem = (key) => {
    if (sessionStorage.getItem(key) !== null) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    return undefined;
};


export const setItem = (key, value) => {
    return sessionStorage.setItem(key, JSON.stringify(value));
};



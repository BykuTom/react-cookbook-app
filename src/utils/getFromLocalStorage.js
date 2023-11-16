export const getFromLocalStorage = (key, defaultValue) => {
    const dataFromLS = localStorage.getItem(key);

    if (!dataFromLS) {
        return defaultValue
    }
    return JSON.parse(dataFromLS)
}
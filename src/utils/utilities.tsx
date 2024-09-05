const getValueFromLocalStorage = (key:any, defaultValue:any) => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null || undefined) {
        return JSON.parse(storedValue);
    } else return defaultValue;
}


const setValueInLocalStorage = (key:any, objectValues:any) => {
    return localStorage.setItem(key, JSON.stringify(objectValues));
}

export {getValueFromLocalStorage, setValueInLocalStorage};
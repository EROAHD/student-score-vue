export default function useLocalStorage() {
    function setLocalStorage(map: Map<string, string>) {
        map.forEach((value, key) => {
            localStorage.setItem(key, value);
        });
    }

    function removeLocalStorage(keys: string[]) {
        keys.forEach((key) => {
            localStorage.removeItem(key);
        });
    }

    return {setLocalStorage, removeLocalStorage};
}
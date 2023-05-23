
const cookieHandler = {
    getAll() {
        let result = {};
        const keyValuePairs = document.cookie.split('; ');
        for (let index in keyValuePairs) {
            let keyAndValue = keyValuePairs[index].split('=');
            result[keyAndValue[0]] = keyAndValue[1];
        }
        return result;
    },
    toSessionStorage() {
        let cookiesKeyValues = this.getAll();
        for (let key of Object.keys(cookiesKeyValues)) {
            sessionStorage.setItem(key, cookiesKeyValues[key]);
        }
    },
    flush() {
        let cookiesKeyValues = this.getAll();
        for (let key of Object.keys(cookiesKeyValues)) {
            document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
        };
    }
}

export { cookieHandler };
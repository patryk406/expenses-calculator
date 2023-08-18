// Desc: Helper functions
// Fetch data from local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

// Store data in local storage
export const storeData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

// remove data from local storage
export const removeData = (key) => {
    localStorage.removeItem(key);
}

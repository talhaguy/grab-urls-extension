/*
    first parameter is meant to be the `chrome.tabs.query` api
    https://developer.chrome.com/extensions/tabs#method-query
*/
export const getData = chromeTabsQuery => {
    return new Promise((res, rej) => {
        const queryInfo = {}
        const callback = tabs => {
            const data = tabs.map(tab => {
                return {
                    url: tab.url,
                    title: tab.title,
                }
            })
            res(data)
        }
        chromeTabsQuery(queryInfo, callback)
    })
}

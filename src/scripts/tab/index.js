import { getData as _getData } from "./tab"

export const getData = (chromeTabsQuery => () => _getData(chromeTabsQuery))(
    chrome.tabs.query
)

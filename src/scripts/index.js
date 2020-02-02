const queryInfo = {}

const callback = tabs => {
    document.getElementById("output").innerHTML = tabs[0].url
}

chrome.tabs.query(queryInfo, callback)

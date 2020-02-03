import { getData } from "./tab"

getData(chrome.tabs.query).then(tabDataList => {
    tabDataList.forEach(tabData => {
        document.getElementById("output").innerHTML +=
            tabData.title + "<br>" + tabData.url + "<br><br>"
    })
})

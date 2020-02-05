import { getData } from "./tab"
import { formatTabData } from "./format"
import "../styles/styles.scss"

getData().then(tabDataList => {
    const formattedString = formatTabData(false, tabDataList)
    document.getElementById("output").value = formattedString

    tabDataList.forEach(tabData => {
        document.getElementById("debug").innerHTML +=
            tabData.title + "<br>" + tabData.url + "<br><br>"
    })
})

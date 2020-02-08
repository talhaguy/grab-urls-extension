export const formatTabData = (showTitle, tabDataList) => {
    return tabDataList.reduce((accum, tabData, i) => {
        let str = ""
        let lastChars = ""

        if (showTitle) {
            str += `${tabData.title}\n`
        }

        if (tabDataList.length - 1 !== i) {
            lastChars = showTitle ? "\n\n" : "\n"
        }

        str += `${tabData.url}${lastChars}`

        return accum + str
    }, "")
}

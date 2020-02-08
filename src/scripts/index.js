import { DomSelectors } from "./constants"
import { getData } from "./tab"
import { formatTabData } from "./format"
import "../styles/styles.scss"

const outputTextArea = document.querySelector(DomSelectors.Output)
const copyButton = document.querySelector(DomSelectors.CopyButton)

document.querySelector(DomSelectors.Form).addEventListener("submit", event => {
    event.preventDefault()

    getData().then(tabDataList => {
        const shouldGrabTitle = document.querySelector(
            DomSelectors.GrabtTitleCheckbox
        ).checked
        const formattedString = formatTabData(shouldGrabTitle, tabDataList)
        outputTextArea.value = formattedString
        copyButton.disabled = false
    })
})

copyButton.addEventListener("click", () => {
    outputTextArea.select()
    document.execCommand("copy")
})

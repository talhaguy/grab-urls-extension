export const showMessage = (element, windowSetTimeout, hideFunc, message) => {
    element.innerText = message
    element.style.display = "block"
    windowSetTimeout(hideFunc, 3000)
}

export const hide = element => {
    element.innerText = ""
    element.style.display = "none"
}

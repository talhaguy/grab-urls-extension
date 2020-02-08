export const showMessage = (
    element,
    windowSetTimeout,
    windowClearTimeout,
    hideFunc,
    state,
    message
) => {
    element.innerText = message
    element.style.display = "block"
    if (state.timeoutId) {
        windowClearTimeout(state.timeoutId)
    }
    state.timeoutId = windowSetTimeout(() => {
        hideFunc()
        state.timeoutId = null
    }, 3000)
}

export const hide = element => {
    element.innerText = ""
    element.style.display = "none"
}

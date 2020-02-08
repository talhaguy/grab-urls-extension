import { showMessage as _showMessage, hide } from "./message"
import { DomSelectors } from "../constants"

const state = {
    timeoutId: null,
}
const messageElement = document.querySelector(DomSelectors.Message)

const hideFunc = (element => () => hide(element))(messageElement)

export const showMessage = ((
    element,
    windowSetTimeout,
    windowClearTimeout,
    hide,
    state
) => message =>
    _showMessage(
        element,
        windowSetTimeout,
        windowClearTimeout,
        hide,
        state,
        message
    ))(messageElement, window.setTimeout, window.clearTimeout, hideFunc, state)

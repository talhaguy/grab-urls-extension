import { showMessage as _showMessage, hide } from "./message"
import { DomSelectors } from "../constants"

const messageElement = document.querySelector(DomSelectors.Message)

const hideFunc = (element => () => hide(element))(messageElement)

export const showMessage = ((element, setTimeoutFunc, hide) => message =>
    _showMessage(element, setTimeoutFunc, hide, message))(
    messageElement,
    window.setTimeout,
    hideFunc
)

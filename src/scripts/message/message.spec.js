import { showMessage, hide } from "./message"

describe("message", () => {
    let element
    let state

    beforeEach(() => {
        element = {
            innerText: "",
            style: {
                display: "",
            },
        }
        state = {
            timeoutId: null,
        }
    })

    describe("showMessage()", () => {
        const message = "This is a message!"
        let windowSetTimeout
        let windowClearTimeout
        let hideFunc

        beforeEach(() => {
            windowSetTimeout = jest.fn().mockReturnValue(123)
            windowClearTimeout = jest.fn()
            hideFunc = jest.fn()
        })

        it("should set the provided message in element", () => {
            showMessage(
                element,
                windowSetTimeout,
                windowClearTimeout,
                hideFunc,
                state,
                message
            )
            expect(element.innerText).toBe(message)
        })

        it("should show the message element", () => {
            showMessage(
                element,
                windowSetTimeout,
                windowClearTimeout,
                hideFunc,
                state,
                message
            )
            expect(element.style.display).toBe("block")
        })

        it("should hide the message after 3 seconds", () => {
            showMessage(
                element,
                windowSetTimeout,
                windowClearTimeout,
                hideFunc,
                state,
                message
            )
            expect(windowSetTimeout.mock.calls.length).toBe(1)
            const setTimeoutCallback = windowSetTimeout.mock.calls[0][0]
            expect(windowSetTimeout.mock.calls[0][1]).toBe(3000)
            expect(hideFunc.mock.calls.length).toBe(0)
            setTimeoutCallback()
            expect(hideFunc.mock.calls.length).toBe(1)
        })

        it("should store the timeout id for hiding the message in the state", () => {
            expect(state.timeoutId).toBeNull()
            showMessage(
                element,
                windowSetTimeout,
                windowClearTimeout,
                hideFunc,
                state,
                message
            )
            expect(state.timeoutId).not.toBeNull()
        })

        it("should set the timeout id for hiding the message to null in the state after timeout callback runs", () => {
            expect(state.timeoutId).toBeNull()
            showMessage(
                element,
                windowSetTimeout,
                windowClearTimeout,
                hideFunc,
                state,
                message
            )
            const timeoutCallback = windowSetTimeout.mock.calls[0][0]
            timeoutCallback()
            expect(state.timeoutId).toBeNull()
        })

        it("should not have more than one active timeout at a time", () => {
            showMessage(
                element,
                windowSetTimeout,
                windowClearTimeout,
                hideFunc,
                state,
                message
            )
            const timeoutIdOne = state.timeoutId
            showMessage(
                element,
                windowSetTimeout,
                windowClearTimeout,
                hideFunc,
                state,
                message
            )
            expect(windowClearTimeout.mock.calls.length).toBe(1)
            expect(windowClearTimeout.mock.calls[0][0]).toBe(timeoutIdOne)
        })
    })

    describe("hide()", () => {
        it("should remove the text in the message element", () => {
            hide(element)
            expect(element.innerText).toBe("")
        })

        it("should hide the message element", () => {
            hide(element)
            expect(element.style.display).toBe("none")
        })
    })
})

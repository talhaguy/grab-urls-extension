import { showMessage, hide } from "./message"

describe("message", () => {
    const element = {
        innerText: "",
        style: {
            display: "",
        },
    }

    afterEach(() => {
        element.innerText = ""
        element.style.display = ""
    })

    describe("showMessage()", () => {
        const message = "This is a message!"
        let windowSetTimeout = jest.fn()
        let hideFunc = jest.fn()
        hideFunc.mockName("hideFunc")

        afterEach(() => {
            windowSetTimeout = jest.fn()
            hideFunc = jest.fn()
            hideFunc.mockName("hideFunc")
        })

        it("should set the provided message in element", () => {
            showMessage(element, windowSetTimeout, hideFunc, message)
            expect(element.innerText).toBe(message)
        })

        it("should show the message element", () => {
            showMessage(element, windowSetTimeout, hideFunc, message)
            expect(element.style.display).toBe("block")
        })

        it("should hide the message after 3 seconds", () => {
            showMessage(element, windowSetTimeout, hideFunc, message)
            expect(windowSetTimeout.mock.calls.length).toBe(1)
            expect(windowSetTimeout.mock.calls[0][0].getMockName()).toBe(
                hideFunc.getMockName()
            )
            expect(windowSetTimeout.mock.calls[0][1]).toBe(3000)
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

import { greet } from "./greet"

describe("greet", () => {
    it("should return name prepended with greeting", () => {
        const name = "Talha"
        expect(greet(name)).toBe("Hello, Talha")
    })
})

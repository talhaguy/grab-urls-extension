import { formatTabData } from "./format"

describe("format", () => {
    describe("formatTabData()", () => {
        const tabDataList = [
            {
                title: "Code Burrito",
                url: "https://www.codeburrito.com/",
            },
            {
                title: "Hemle",
                url: "https://www.hemle.org/",
            },
        ]

        it("should format data accordingly when title flag is true", () => {
            const showTitle = true
            const expected =
                "Code Burrito\n" +
                "https://www.codeburrito.com/\n\n" +
                "Hemle\n" +
                "https://www.hemle.org/"
            const result = formatTabData(showTitle, tabDataList)
            expect(result).toBe(expected)
        })

        it("should format data accordingly when title flag is false", () => {
            const showTitle = false
            const expected =
                "https://www.codeburrito.com/\n" + "https://www.hemle.org/"
            const result = formatTabData(showTitle, tabDataList)
            expect(result).toBe(expected)
        })
    })
})

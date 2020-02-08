import { getData } from "./tab"

describe("tab", () => {
    describe("getData()", () => {
        it("should return a promise with tab url data", done => {
            const chromeTabsQuery = jest.fn((queryInfo, callback) => {
                const tabs = [
                    {
                        title: "Some Title",
                        url: "https://www.codeburrito.com/",
                    },
                ]
                callback(tabs)
            })
            const dataPromise = getData(chromeTabsQuery)
            dataPromise.then(tabsUrlDataList => {
                tabsUrlDataList.forEach(tabsUrlData => {
                    expect(tabsUrlData).toHaveProperty("title")
                    expect(tabsUrlData).toHaveProperty("url")
                })
                done()
            })
        })
    })
})

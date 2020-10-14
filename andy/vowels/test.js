const vowels = require("./index")

test("Vowels is a function", () => {
    expect(typeof vowels).toEqual("function")
})

test("aeiou returns 5", () => {
    expect(vowels("aeiou")).toEqual(5)
})

test("AEIOU returns 5 when they are capitalized", () => {
    expect(vowels("AEIOU")).toEqual(5)
})

test("abcdefghijklmnopqrstuvwxyz return 5", () => {
    expect(vowels("abcdefghijklmnopqrstuvwxyz")).toEqual(5)
})

test("bcdfghjkl return 0", () => {
    expect(vowels("bcdfghjkl")).toEqual(0)
})

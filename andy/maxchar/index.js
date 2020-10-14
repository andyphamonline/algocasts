// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {}
    str.split("").forEach((char) => {
        if (obj.hasOwnProperty(char)) obj[char]++
        else obj[char] = 1
    })

    let mostCommonChar = ""
    let highestOccurence = 0
    for (let char in obj) {
        if (obj[char] > highestOccurence) {
            highestOccurence = obj[char]
            mostCommonChar = char
        }
    }

    return mostCommonChar
}

module.exports = maxChar

// what is the most common character in the string?
// does string A have the same characters as string B (is it an anagram)?
// does the given string have any repeated characteres in it?

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const arr = str.split("")
    const regex = new RegExp(/\W/)
    const newArr = []
    arr.forEach((char, i) => {
        if (i === 0 || regex.test(arr[i - 1])) newArr.push(char.toUpperCase())
        else newArr.push(char)
    })

    return newArr.join("")
}

// function capitalize(str) {
//     const arr = str.split("")
//     const regex = new RegExp(/\W/)
//     arr.forEach((char, i) => {
//         if (i === 0 || regex.test(arr[i - 1]))
//             arr.splice(i, 1, char.toUpperCase())
//     })

//     return arr.join("")
// }

module.exports = capitalize

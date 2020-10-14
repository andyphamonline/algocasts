// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' i = 1
//       ' ### ' i = 2
//       '#####' i = 3
//   pyramid(4)
//      '   #   ' i = 1
//      '  ###  ' i = 2
//      ' ##### ' i = 3
//      '#######' i = 4

// function pyramid(n) {
//     let currentNumberOfPound = 1
//     for (let i = 1; i <= n; i++) {
//         const strPound = "#".repeat(currentNumberOfPound)
//         currentNumberOfPound += 2

//         const strSpace = " ".repeat(n - i)

//         const str = strSpace.concat(strPound, strSpace)

//         console.log(str)
//     }
// }


// function pyramid(n) {
//     let currentNumberOfPound = 1
//     for (let i = 1; i <= n; i++) {
//         console.log(`${" ".repeat(n - i)}${"#".repeat(currentNumberOfPound)}${" ".repeat(n - i)}`)
//         currentNumberOfPound += 2
//     }
// }

function pyramid(n, i = 1, currentNumberOfPound = 1) {
  if (i > n) return

  console.log(`${" ".repeat(n - i)}${"#".repeat(currentNumberOfPound)}${" ".repeat(n - i)}`)

  return pyramid(n, i + 1, currentNumberOfPound + 2)
}

module.exports = pyramid

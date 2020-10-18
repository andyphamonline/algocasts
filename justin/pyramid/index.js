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
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  /*
    let length = n + (n - 1);
    let steps = 1;

    loop (start from 1) to n:
      spaces = length - steps;
      line = ''

      append half spaces
      append steps
      append half spaces

      modify steps
      print line
  */
  let lineLen =  n + (n - 1);
  let steps   =  1;

  for (let i = 0; i < n; i++) {
    let halfOfSpaces =  appendToStr(' ', (lineLen - steps) / 2);
    let line         =  halfOfSpaces + appendToStr('#', steps) + halfOfSpaces;

    steps += 2;
    console.log(line);
  }
}

const appendToStr = (char, amount) => {
  let str = '';
  for (let i = 0; i < amount; i++) {
    str += char;
  }
  return str;
}

module.exports = pyramid;

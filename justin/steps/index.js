// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // length is n
  // steps = 1

  /*
    loop (start at 1) up to n
      let str = ''

      append as many steps
      append the rest of length in spaces
      print str
  */

  for (let row = 1; row <= n; row++) {
    let str = '' + appendToStr('#', row) + appendToStr(' ', n - row);
    console.log(str);
  }
}

const appendToStr = (char, amount) => {
  let str = '';
  for (let i = 0; i < amount; i++) {
    str += char;
  }
  return str;
}

module.exports = steps;

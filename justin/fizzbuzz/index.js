// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // count up to n
  for (let i = 1; i <= n; i++) {
    let str = '';

    if (i % 3 === 0) {
      str += 'fizz';
    }
    if (i % 5 === 0) {
      str += 'buzz';
    }
    // done this way because this asinine test expects to print out int(i) and not str(i)
    console.log(str.length === 0 ? i : str)
  }
}

module.exports = fizzBuzz;

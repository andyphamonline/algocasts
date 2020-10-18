// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str) => (
  str
  .split(' ')
  .map( (word) => `${word[0].toUpperCase()}${word.slice(1)}`)
  .join(' ')
);


const capitalize_reduce = (str) => (
  str
  .slice(1)
  .split('')
  .reduce( (acc, char) => (acc += acc[acc.length - 1] === ' ' ? char.toUpperCase() : char), str[0])
);

module.exports = capitalize;

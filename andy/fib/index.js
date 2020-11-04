// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Recursive without memoization will have time complexity O(2^n) because O(branch ^ depth)
// recursive with memoization
// Time: O(n)
// Space: O(n)
function fib(n, memo = []) {
	if (n < 2) return n

	if (n < 2 || memo[n]) return memo[n]

	memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

	return memo[n]
}

module.exports = fib

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// *********use temporary array
function chunk(array, size) {
	const resultArr = []
	let chunk = []
	let counter = 1
	array.forEach((num) => {
		chunk.push(num)
		if (counter === size) {
			resultArr.push(chunk)
			chunk = []
			counter = 1
		} else {
			counter++
		}
	})

	if (chunk.length !== 0) resultArr.push(chunk)

	return resultArr
}

// *********use slice()
function chunk(array, size) {
	const resultArr = []
	for (let i = 0; i < array.length; i = i + size) {
		resultArr.push(array.slice(i, i + size))
	}

	return resultArr
}

// *********use reduce()
function chunk(array, size) {
	return array.reduce((acc, currentValue, index, arr) => {
		if (index % size === 0) acc.push(arr.slice(index, index + size))

		return acc
	}, [])
}

module.exports = chunk

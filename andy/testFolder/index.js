// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// *********use reduce()
function chunk(array, size) {
	let chunk = []
	const resultArr = array.reduce((acc, currentValue, index, arr) => {
		chunk.push(currentValue)

		if ((index + 1) % 2 === 0) {
			acc.push(chunk)
			chunk = []
		}

		return acc
	}, [])

	if (chunk.length !== 0) resultArr.push(chunk)

	return resultArr
}

console.log(chunk([1, 2, 3, 4, 5], 2))

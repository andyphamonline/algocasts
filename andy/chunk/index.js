// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
function chunk(array, size) {
    const resultArr = []
    for (let i = 0; i < array.length; i = i + size) {
        if (i + size > array.length) resultArr.push(array.slice(i))
        else resultArr.push(array.slice(i, i + size))
    }

    return resultArr
}

function chunk(array, size) {
    return array.reduce((acc, current, index, arr) => {
        if (index % size !== 0) return acc
        acc.push(arr.slice(index, index + size))
        return acc
    }, [])
}

module.exports = chunk

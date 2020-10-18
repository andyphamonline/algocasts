// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, size) {
  let count =  0;
  let list  =  [];
  let chunk =  [];

  arr.forEach( (el, i) => {
    chunk.push(el);
    count += 1;

    let chunkIsFull    =  chunk.length == size;
    let noMoreElements =  i == arr.length - 1;

    if (chunkIsFull || noMoreElements) {
      list.push(chunk);
      chunk = [];
      count = 0;
    }
  });

  return list;
}

module.exports = chunk;

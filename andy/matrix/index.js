// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let row = 0
	let column = 0
	let isFilled = false
	let direction = "right" // down, left, up

	// construct matrix with emptry string value
	const matrices = Array(n)
		.fill()
		.map((item) => Array(n).fill(""))

	const _changeDirection = (currentDirection) => {
		switch (currentDirection) {
			case "right":
				direction = "down"
				row++
				break
			case "down":
				direction = "left"
				column--
				break
			case "left":
				direction = "up"
				row--
				break
			case "up":
				direction = "right"
				column++
				break
		}
	}

	// fill in current number and change isFilled to true
	const _fillNumber = (currentNumber) => {
		matrices[row][column] = currentNumber
		isFilled = true
	}

	const _isNextBlockFilled = (currentDirection) => {
		if (currentDirection === "right") return !!matrices[row][column + 1]
		if (currentDirection === "down") return !!matrices[row + 1][column]
		if (currentDirection === "left") return !!matrices[row][column - 1]
		if (currentDirection === "up") return !!matrices[row - 1][column]
	}

	for (let i = 0; i < n * n; i++) {
		isFilled = false

		while (isFilled === false) {
			// if direction is right and has not filled in a number yet
			if (direction === "right" && isFilled === false) {
				// if current block is empty
				if (matrices[row][column] === "") {
					_fillNumber(i + 1) // fill in current number
					// if not at the last column or the next block is already filled, then change direction
					if (column === n - 1 || _isNextBlockFilled("right")) {
						_changeDirection("right")
					} else {
						column++
					}
					// if current block is already filled, then change direction
				} else {
					_changeDirection("right")
				}
			} else if (direction === "down" && isFilled === false) {
				if (matrices[row][column] === "") {
					_fillNumber(i + 1)
					if (row === n - 1 || _isNextBlockFilled("down")) {
						_changeDirection("down")
					} else {
						row++
					}
				} else {
					_changeDirection("down")
				}
			} else if (direction === "left" && isFilled === false) {
				if (matrices[row][column] === "") {
					_fillNumber(i + 1)
					if (column === 0 || _isNextBlockFilled("left")) {
						_changeDirection("left")
					} else {
						column--
					}
				} else {
					_changeDirection("left")
				}
			} else if (direction === "up" && isFilled === false) {
				if (matrices[row][column] === "") {
					_fillNumber(i + 1)
					if (row === 0 || _isNextBlockFilled("up")) {
						_changeDirection("up")
					} else {
						row--
					}
				} else {
					_changeDirection("up")
				}
			}
		}
	}

	return matrices
}

module.exports = matrix

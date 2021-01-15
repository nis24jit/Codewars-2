function sudoku(board) {
    
    const find = findEmpty(board)
    if (!find) return true
    else {
        let row = find[0]
        let col = find[1]
        for (let i = 1; i < 10; i++) {
            if (valid(board, i, [row, col])) {
                board[row][col] = i
                if (sudoku(board)) {
                    return board
                }
                board[row][col] = 0
            }
        }
    }
    return false
}

function valid(board, num, position) {

    //Check row
    for (let i = 0; i < board[0].length; i++) {
        if (board[position[0]][i] === num && position[1] !== i) {
            return false
        }
    }
    //Check column
    for (let i = 0; i < board[0].length; i++) {
        if (board[i][position[1]] === num && position[0] !== i) {
            return false
        }
    }
    // Check parts
    const x = Math.floor(position[1] / 3)
    const y = Math.floor(position[0] / 3)
    for (let i = y * 3; i < y * 3 + 3; i++) {
        for (let j = x * 3; j < x * 3 + 3; j++) {
            if (board[i][j] === num && i !== position[0] && j !== position[1]) {
                return false
            }
        }
    }
    return true
}

function findEmpty(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                return [i, j] // row and column
            }
        }
    }
    return false
}
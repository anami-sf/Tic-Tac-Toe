/* 
Game Story 

. Generate board
. Keep track of turn 
. Mark squares clicked by players - show on page
. Calculate winner
. Render winner

*/

// Calculate winner

// Iterate through board to look for winning patterns: horizontal, vertical, diagonal

//

const checkForWin = (rowIdx, colIdx) => {
    console.log('checking for win')
    if (checkRow(rowIdx) || checkCol(colIdx) || checkDiagonal(rowIdx, colIdx)) {
        return true
    } else {
        return false
    }
}

const checkRow = (rowIdx) => {
    console.log('Checking row')
    const rowArr = board[rowIdx]
    const sum = Math.abs(rowArr[0] + rowArr[1] + rowArr[2])
    console.log(board)
    console.log('sum: ' + sum)
    return sum === 3 ? true : false
}

const checkCol = (colIdx) => {
    console.log('Checking col')
    const sum = Math.abs(board[0][colIdx] + board[1][colIdx] + board[2][colIdx])
    console.log(board)
    console.log('sum: ' + sum)
    return sum === 3 ? true : false
}

const checkDiagonal = (rowIdx, colIdx) => {
    console.log('Checking diagonal')
    const sum1 = Math.abs(board[0][0] + board[1][1] + board[2][2])
    const sum2 = Math.abs(board[2][0] + board[1][1] + board[0][2])
    console.log(`sum1: ${sum1} sum2:${sum2}`)
    return sum1 === 3 || sum2 === 3 ? true : false
}

/*----- constants -----*/

const boardEl = document.querySelector('#board')

/* const players = {
    '1': 'X',
    '-1': 'O',
    '0': ' ', 
}*/


/*----- app's state (variables) -----*/ 
let board, turn, winner;
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 

//Assign id's to each cell


/*----- functions -----*/
initialize()

function initialize() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    turn = true 
    render()
}

function render() {
    renderBoard()
}

function renderBoard() {
    board.forEach(function (rowArr, rowIdx){
        rowArr.forEach(function (cellValue, colIdx){
            const cellEl = document.createElement('div')
            cellEl.setAttribute('data-row', rowIdx)
            cellEl.setAttribute('data-col', colIdx)
            //console.log('position: ' + cellEl.getAttribute('data-row') + cellEl.getAttribute('data-col'))
            cellEl.classList.add('cell')
            boardEl.appendChild(cellEl)           
        })
    })
    boardEl.addEventListener("click", handleClick)  // Delegate event handling in Memory game
}
// When I click a box mark it with an x
function handleClick(evt) {
    //console.log('playStartBoard: ' , board)
    const row = parseInt(evt.target.getAttribute('data-row')) 
    const col = parseInt(evt.target.getAttribute('data-col')) 
    console.log('row: ' + row)
    console.log('col: ' + col)
  
    if (turn) {
        evt.target.textContent = 'X'
        board[row][col] = 1

    } else {
        evt.target.textContent = 'O'
        board[row][col] = -1
    }
    turn = !turn
    if (checkForWin(row, col)){console.log('You win!')}
}


//Create score tracker

/* const sum = (arr) => {
    arr.reduce((acc, num) => {
        return acc + num
    }, 0)
}
 */


const getWinner = () => {
    
    if (!turn) {
        console.log('winner: Player1')
    } else {
        console.log('winner: Player2')
    }
}



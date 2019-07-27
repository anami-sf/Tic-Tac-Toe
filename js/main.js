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
    checkRow(rowIdx)
    checkCol(colIdx)
    checkDiagonal(rowIdx, colIdx)
}

const checkRow = (rowIdx) => {
    console.log('Checking row')
    const rowArr = board[rowIdx]
    const sum = rowArr[0] + rowArr[1] + rowArr[2]
    console.log(board)
    console.log('sum: ' + sum)
    return sum
}

const checkCol = (colIdx) => {
    console.log('Checking col')
    //const colArr = board[colIdx]
    const sum = board[0][colIdx] + board[1][colIdx] + board[2][colIdx]
    console.log(board)
    console.log('sum: ' + sum)
    return sum
}

/* const checkDiagonal = (rowIdx, colIdx) => {
    console.log('Checking diagonal')
    const rowArr = board[rowIdx]
    const sum = row[0] + row[1] + row[2]
    console.log('sum: ' + sum)
    return sum
} */

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
    boardEl.addEventListener("click", play)  // Delegate event handling in Memory game
}
// When I click a box mark it with an x

console.log('first board:', board)

function play(evt) {
    console.log('playStartBoard: ' , board)
    const row = evt.target.getAttribute('data-row')
    const col = evt.target.getAttribute('data-col')
    console.log('row: ' + row)
    console.log('col: ' + col)
  
    if (turn) {
        evt.target.textContent = 'X'
        console.log('cell value:', board[row][col])
        board[row][col] = 1

    } else {
        evt.target.textContent = 'O'
        board[row][col] = -1
    }
    console.log('tgt: ' , evt.target.getAttribute.textContent)
    console.log('endPlay: ' , board)
    turn = !turn
    checkForWin(row, col)
    
    
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


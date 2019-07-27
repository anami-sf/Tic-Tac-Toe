/* 
Game Story 

. Generate board
. Keep track of turn 
. Mark squares clicked by players - show on page
. track each player's moves
. Determine winner
. Render score


*/


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

const renderBoard = () => {
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
const play = (evt) => {

    const row = evt.target.getAttribute('data-row')
    const col = evt.target.getAttribute('data-col')
  
    if (turn) {
        evt.target.textContent = 'X'
        board[row][col] = 1

    } else {
        evt.target.textContent = 'O'
        board[row][col] = -1
    }
    turn = !turn
    scoreTracker()
}


//Create score tracker

/* const sum = (arr) => {
    arr.reduce((acc, num) => {
        return acc + num
    }, 0)
}
 */
const scoreTracker = () => {
    // Represent three consecurive marks:

    //if every cell of a row is the same

    //iterate over board 

    for (row of board) {
        //cellEl.setAttribute('data-position', `r${rowIdx}c${colIdx}`)
        console.log('row: ' + row)
        //console.log('rowSum: ' + sum(row))
/*         if (  Math.abs(sum(row)) === 3 ) {
            console.log('sum: ' + sum(row))
            console.log('row: ' + row)
            break
        } */

        if (!turn) {
            console.log('Winner is Player1')
        } else {
            console.log('Winner is Player12')
        }
        
    }
}

const getWinner = () => {
    
    if (!turn) {
        console.log('winner: Player1')
    } else {
        console.log('winner: Player2')
    }
}

const render = () => {
    console.log('render')
    renderBoard()
}

const initialize = () => {
    turn = true
    console.log('Initialized')
    board = Array(3).fill(Array(3).fill(null))
    console.log(board)
    render()
}

initialize()
/* 
Game Story 
*/


/*----- constants -----*/
var board, turn;
const boardEl = document.querySelector('#board')

/*----- app's state (variables) -----*/ 
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 

//Assign id's to each cell


/*----- functions -----*/

const initialize = () => {
    turn = true
    console.log('Initialized')
    //board = Array(3).fill(Array(3).fill(0))
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    console.log('Init board: ', board)
}

initialize()


// When I click a box mark it with an x
const play = (evt) => {
    console.log('startPalyBoard: ', board)
    console.log('Click!: ' + evt.target.getAttribute('data-position'))
    if (turn) {
        console.log(evt.target)
        evt.target.textContent = 'X'
        board[0][1] = 1
    } else {
        evt.target.textContent = 'O'
    }
    turn = !turn
    console.log('endPlayBoard: ' , board)
}

//Create cell elements
const iterateBoard = () => {
    board.forEach(function (rowArr, rowIdx){
        rowArr.forEach(function (cellValue, colIdx){
            const cellEl = document.createElement('div')
            //cellEl.setAttribute('data-position', `r${rowIdx}c${colIdx}`)
            //console.log('position: ' + cellEl.getAttribute('data-position'))
            cellEl.classList.add('cell')
            boardEl.appendChild(cellEl)
                      
        })
    })
    boardEl.addEventListener("click", play)  // Delegate event handling in Memory game
}

iterateBoard()


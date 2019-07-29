/* 
Game Story 

. Generate board
. Keep track of turn 
. Mark squares clicked by players - show on page
. Calculate winner
. Render winner

*/

/*----- constants -----*/

const zombies =  [
    "<img class=mark alt=zombie src=images/zombie1.svg>",
    "<img class=mark alt=zombie src=images/zombie2.svg>",
    "<img class=mark alt=zombie src=images/zombie3.svg>",
    "<img class=mark alt=zombie src=images/zombie4.svg>",
    "<img class=mark alt=zombie src=images/zombie5.svg>"
]

const plants = [
    "<img class=mark alt=plant src=images/plant1.svg>",
    "<img class=mark alt=plant src=images/plant2.svg>",
    "<img class=mark alt=plant src=images/plant3.svg>",
    "<img class=mark alt=plant src=images/plant4.svg>",
    "<img class=mark alt=plant src=images/plant5.svg>",
]

let moveCt1 = 0
let moveCt2 = 0
const boardEl = document.querySelector('#board')
const resetBtn = document.querySelector('#resetBtn')
const main = document.querySelector("#main")


/*----- app's state (variables) -----*/ 
var board;
let turn, winner;
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 

resetBtn.addEventListener("click", reset)


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
            cellEl.style.backgroundColor='lightyellow'
            //console.log('position: ' + cellEl.getAttribute('data-row') + cellEl.getAttribute('data-col'))
            cellEl.classList.add('cell')
            boardEl.appendChild(cellEl)           
        })
    })
    boardEl.addEventListener("click", handleClick)  // Delegate event handling in Memory game
}

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

// When I click a box mark it with an x
function handleClick(evt) {

    const row = parseInt(evt.target.getAttribute('data-row')) 
    const col = parseInt(evt.target.getAttribute('data-col')) 
    console.log('row: ' + row)
    console.log('col: ' + col)
  
    if (turn) {
        evt.target.innerHTML = zombies[moveCt1]
        evt.target.style.backgroundColor = "darkgrey"
        board[row][col] = 1
        moveCt1 += 1

    } else {
        evt.target.innerHTML = plants[moveCt2]
        board[row][col] = -1
        moveCt2 += 1
    }
    turn = !turn
    if (checkForWin(row, col)){
        const winnerEl = document.createElement('div')
        if (!turn) {
            winnerEl.textContent = 'The zombies ate your barins!!'
            winnerEl.setAttribute("id", "zombiesWin" )
            main.appendChild(winnerEl)
            
            console.log('The zombies ate your barins!!')
            //alert('The zombies ate your barins!!')
        } else {
            winnerEl.textContent = 'The plants are taking over!!'
            winnerEl.setAttribute("id", "plantsWin" )
            main.appendChild(winnerEl)
        }
        console.log('You win!')
    }
}

function reset(){
    boardEl.innerHTML = ''
    renderBoard()
    moveCt1 = 0
    moveCt2 = 0
    for(row of board) {
        for(cellValue of row){
            cellValue = 0
            console.log('cell value: ' , typeof cellValue)       
        }
    }
    console.log('endBoard: ', board)
}
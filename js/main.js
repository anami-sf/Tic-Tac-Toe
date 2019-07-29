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
const main = document.querySelector("#main")
const boardEl = document.querySelector('#board')
const winnerEl = document.querySelector('#winner')
const turnEl = document.querySelector("#turn")
const resetBtn = document.querySelector('#resetBtn')

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
    turnEl.innerHTML = "<span id=plants>Plants</span><span id=vs> vs </span> <span id=zombies>Zombies</span>"
    console.log(board)
    //console.log('type: ', typeof(board), 'value', board[0][0])
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

function displayTurn(){
    turnEl.innerHTML = ""
    if(turn){
        turnEl.innerHTML = "<span id=zombies>Zombies</span>"
    } else {
        turnEl.innerHTML = "<span id=plants>Plants</span>"
    }

}

const checkRow = (rowIdx) => {
    const rowArr = board[rowIdx]
    const sum = Math.abs(rowArr[0] + rowArr[1] + rowArr[2])
    return sum === 3 ? true : false
}

const checkCol = (colIdx) => {
    const sum = Math.abs(board[0][colIdx] + board[1][colIdx] + board[2][colIdx])
    return sum === 3 ? true : false
}

const checkDiagonal = (rowIdx, colIdx) => {
    const sum1 = Math.abs(board[0][0] + board[1][1] + board[2][2])
    const sum2 = Math.abs(board[2][0] + board[1][1] + board[0][2])
    return sum1 === 3 || sum2 === 3 ? true : false
}

const checkForWin = (rowIdx, colIdx) => {
    if (checkRow(rowIdx) || checkCol(colIdx) || checkDiagonal(rowIdx, colIdx)) {
        return true
    } else {
        return false
    }
}

function displayWinner(row, col) {
    if (checkForWin(row, col)){      
        if (!turn) {
            winnerEl.textContent = 'The zombies ate your brains!!'
            winnerEl.setAttribute("id", "zombiesWin" )
        } else {
            winnerEl.textContent = 'The plants are taking over!!'
            winnerEl.setAttribute("id", "plantsWin" )
        }
    } else if (moveCt1===5){
        winnerEl.textContent = "Its a tie -_-"
        winnerEl.setAttribute("id", "zombiesWin" )
    }
}

// When I click a box mark it with an x
function handleClick(evt) {

    const row = parseInt(evt.target.getAttribute('data-row')) 
    const col = parseInt(evt.target.getAttribute('data-col')) 
  
    if (board[row][col] === 0 && !checkForWin(row, col)){
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
        displayTurn()
        turn = !turn
        displayWinner(row, col)
        console.log(board[row][col], typeof board[row][col] )
    } else {
        console.log('double click')
    }
}

function reset(){
    boardEl.innerHTML = ''
    renderBoard()
    moveCt1 = 0
    moveCt2 = 0
    winnerEl.textContent = ""
    turnEl.innerHTML = "<span id=plants>Plants</span><span id=vs> vs </span> <span id=zombies>Zombies</span>"
    console.log(board)

    board.forEach(function (rowArr, rowIdx){
        rowArr.forEach(function (cellValue, colIdx){
            board[rowIdx][colIdx] = 0
        })
    })
    // for (let i=0; i<board.length; i++){
    //     for (let j=0; j<board[i].length; i++){
    //         //console.log(board[i][j])
    //         board[i][j] = 0
    //     }
    // }
    // for(row of board) {  //forEach and standard
    //     for(cellValue of row){
    //         cellValue = 0   //The cell value is not getting reset as 
    //         console.log(cellValue)
    //         console.log(board)
    //     }
    //     console.log(board)
    // }
    console.log(board)
}
/*----- constants -----*/ 
/*----- app's state (variables) -----*/ 
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 
/*----- functions -----*/

/* 
When I click a box mark it with an x
*/

let board;

const initialize = () => {
    console.log('Initialized')
    board = Array(3).fill(Array(3).fill(null))
    console.log(board)
}

 
const iterateBoard = () => {
    board.forEach(function (rowArr, rowIdx){
        rowArr.forEach(function (cellValue, colIdx){
            console.log(`r${rowIdx}c${colIdx}`)
            console.log(cellValue)
        })
    })
} 

initialize()
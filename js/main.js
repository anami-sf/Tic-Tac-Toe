/* 
Game Story 
*/


/*----- constants -----*/ 
/*----- app's state (variables) -----*/ 
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 

//Assign id's to each cell


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

//Assign id's to each cell 
const iterateBoard = () => {
    board.forEach(function (rowArr, rowIdx){
        rowArr.forEach(function (cellValue, colIdx){
            //console.log(`r${rowIdx}c${colIdx}`)
            //console.log(cellValue)           
        })
    })
}

initialize()

const cellArr = document.querySelectorAll('.cell')
for ( cell of cellArr) {
    console.log(cell)
}


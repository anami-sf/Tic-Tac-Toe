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
    console.log(board)
}

 board = Array(3).fill(Array(3).fill(null))

 /*
const iterateBoard = () => {

} */

initialize()
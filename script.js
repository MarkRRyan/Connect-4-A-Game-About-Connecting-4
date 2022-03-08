const spaceBoard = document.querySelector('.space');
const spaceRow = document.getElementsByTagName('tr');
const spaceCell = document.getElementsByTagName('td');
let playerTurn = document.querySelector('.player-turn');
const resetBtn = document.querySelector('.reset');
const playerOne = 'Blue'
const playerTwo = 'Green'
const playerOneColor = 'blue';
const playerTwoColor = 'green';


for (i = 0; i < spaceCell.length; i ++){
    spaceCell[i].addEventListener('click', (coord) =>{
        console.log(`${coord.target.parentElement.rowIndex},${coord.target.cellIndex}`)
    });
};

let currentPlayer = playerOne;
// playerTurn.innerHTML = `${playerOne}'s turn!` 'broken code'

Array.prototype.forEach.call(spaceCell, (cell) => {
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'white';
});

function changeColor(coord) {
    let column = coord.target.cellIndex;
    let row = [];

    for (let i = 5; i > -1; i--) {
        if (spaceRow[i].children[column].style.backgroundColor == 'white'){            
            row.push(spaceRow[i].children[column]);
            if (currentPlayer === playerOne) {
                row[0].style.backgroundColor = 'blue';
                // playerTurn.innerHTML = `${playerTwo}'s Turn`; 'broken code'
                return currentPlayer = playerTwo;
            } else {
                row[0].style.backgroundColor = 'green';
                return currentPlayer = playerOne;
            }
        }
    }
}

// resetBtn.addEventListener('click', () =>{
//     spaceBoard.forEach(space => {
//         space.style.backgroundColor = 'white';
//     });
//     return
// });
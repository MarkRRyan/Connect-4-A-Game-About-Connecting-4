const spaceBoard = document.querySelector('.space');
const spaceRow = document.getElementsByTagName('tr');
const spaceCell = document.getElementsByTagName('td');
let playerTurn = document.querySelector('playerTurn');
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
// playerTurn.innerHTML = `${playerOne}'s turn!`

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
                if (hasPlayerWon(playerOne)) {
                    return alert('You Won!');
                } else if (draw()) {
                    return alert('You Draw');
                } else {
                    return currentPlayer = playerTwo;
                }
                
            } else {
                row[0].style.backgroundColor = 'green';
                if (hasPlayerWon( )) {
                    return alert('You Won!');
                } else if (draw()) {
                    return alert('You Draw');
                } else {
                    return currentPlayer = playerOne;
                }
            }
        }
    }
}

function hasPlayerWon(currentPlayer) {
    for (let i = 0; i < spaceCell.length; i++) {
        if (spaceCell[41] === currentPlayer) {
             if (spaceCell[40] === currentPlayer && spaceCell[39] === currentPlayer && spaceCell[38] === currentPlayer) {
                return true;
            }
            if (spaceCell[34] === currentPlayer && spaceCell[27] === currentPlayer && spaceCell[20] === currentPlayer) {
                return true;
            }
            if (spaceCell[33] === currentPlayer && spaceCell[25] === currentPlayer && spaceCell[17] === currentPlayer) {
                return true;
            }

        }
        if (spaceCell[35] === currentPlayer) {
            if (spaceCell[36] === currentPlayer && spaceCell[37] === currentPlayer && spaceCell[38] === currentPlayer) {
                return true;
            }
            if (spaceCell[28] === currentPlayer && spaceCell[21] === currentPlayer && spaceCell[14] === currentPlayer) {
                return true;
            }
            if (spaceCell[29] === currentPlayer && spaceCell[23] === currentPlayer && spaceCell[17] === currentPlayer) {
                return true;
            }
        }
    }
}

function draw() {
    let fullSpaces = []
    for (i = 0; i < spaceCell.length; i++) {
        if (spaceCell[i].style.backgroundColor !== 'white') {
            fullSpaces.push(spaceCell[i]);
        }
        if (fullSpaces.length === spaceCell.length) {
            return true;
        }
    }
}



// resetBtn.addEventListener('click', () =>{
//     spaceBoard.forEach(space => {
//         space.style.backgroundColor = 'white';
//     });
//     return
// });
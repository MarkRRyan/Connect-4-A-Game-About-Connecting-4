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
playerTurn.innerHTML = `${playerOne}'s turn!`

Array.prototype.forEach.call(spaceCell, (cell) => {
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'white';
});

// function changeColor(coord) {
//     let column = coord.target.cellIndex;
//     let row = [];

//     for (let i = 5; i > -1; i--) {
//         if (spaceRow[i].children[column].style.backgroundColor == 'white'){            
//             row.push(spaceRow[i].children[column]);
//             if (currentPlayer === playerOne) {
//                 row[0].style.backgroundColor = 'blue';
//                 if (hasPlayerWon(currentPlayer)) {
//                     alert('You Won!');
//                     return;
//                 }
//                 // playerTurn.innerHTML = `${playerTwo}'s Turn`; 'broken code'
//                 return currentPlayer = playerTwo;
//             } else {
//                 row[0].style.backgroundColor = 'green';
//                 if (hasPlayerWon(currentPlayer)) {
//                     alert('You Won!');
//                     return;
//                 }
//                 return currentPlayer = playerOne;
//             }
//         }
//     }
// }

function changeColor(coord) {
    let column = coord.target.cellIndex;
    let row = [];

    for (let i = 5; i > -1; i--) {
        if (spaceRow[i].children[column].style.backgroundColor == 'white'){            
            row.push(spaceRow[i].children[column]);
            if (currentPlayer === playerOne) {
                row[0].style.backgroundColor = 'blue';
                if (hasPlayerWon( )) {
                    return alert('You Won!');
                }
                // playerTurn.innerHTML = `${playerTwo}'s Turn`; 'broken code'
                return currentPlayer = playerTwo;
            } else {
                row[0].style.backgroundColor = 'green';
                if (hasPlayerWon( )) {
                    return alert('You Won!');
                }
                return currentPlayer = playerOne;
            }
        }
    }
}


// function colorMatchCheck(one, two, three, four) {
//     return (one == two && one === three && one === four && one !== 'white');
// }

const hasPlayerWon = (player) => {
    if (spaceCell[41] === player) {
        if (spaceCell[40] === player && spaceCell[39] === player && spaceCell[38] === player) {
            return true;
        }
        if (spaceCell[34] === player && spaceCell[27] === player && spaceCell[20] === player) {
            return true;
        }
        if (spaceCell[33] === player && spaceCell[25] === player && spaceCell[17] === player) {
            return true;
        }

    }
    if (spaceCell[35] === player) {
        if (spaceCell[36] === player && spaceCell[37] === player && spaceCell[38] === player) {
            return true;
        }if (spaceCell[28] === player && spaceCell[21] === player && spaceCell[14] === player) {
            return true;
        }if (spaceCell[29] === player && spaceCell[23] === player && spaceCell[17] === player) {
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
const gameboard = document.getElementById('gameboard');
const cell = document.getElementsByTagName('td');
const row = document.getElementsByTagName('tr');
const spaceBoard = document.querySelector('.space');
playerOne = 'Blue'
playerTwo = 'Green'


for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', (coord) => {
        console.log(`${coord.target.parentElement.rowIndex}, ${coord.target.cellIndex}`);
    })
}

let currentPlayer = playerOne;
playerTurn.innerHTML = `${currentPlayer}'s Turn`

let board = document.getElementById('board');
let turn = document.getElementById('turn');
let reset = document.getElementById('reset');
let squares = board.getElementsByTagName('td');
let currentPlayer = 'X';

function switchPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  turn.innerHTML = 'Turn ' + currentPlayer;
}

function handleClick() {
  if (this.innerHTML === '') {
    this.innerHTML = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + ' You win!');
      resetBoard();
    } else if (checkTie()) {
      alert('Tie!');
      resetBoard();
    } else {
      switchPlayer();
    }
  }
}

function checkWin() {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (squares[a].innerHTML === currentPlayer && squares[b].innerHTML === currentPlayer && squares[c].innerHTML === currentPlayer) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML === '') {
      return false;
    }
  }
  return true;
}

function resetBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }
  currentPlayer = 'X';
  turn.innerHTML = 'Turn ' + currentPlayer;
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', handleClick);
}

reset.addEventListener('click', resetBoard);

// v2.0.0 -- Tic Tac Code
// Completed by Matt Stubenhofer for freeCodeCamp Zipline

// =======================================================
//
// Features Needed:
// 1. Make it a two player game?
//
// =======================================================

// The original game board array
let original = [];
// The spaces on the UI available to be played
const tiles = document.querySelectorAll('.box');
// A list of all available winning combinations, to be verified in game
const winningCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2] ];
// Player variables
let human, computer;

// Launch Game
begin();

// 1. On page load, player is presented with option to decide which player to be
// 2. Return their selection and store appropriately
// 3. Set computer to inverse player
// 4. Transition load screens
// 5. Launch Game
function playerSelection(selection) {
  human = selection;
  console.log(`Human is ${human}`);
  (selection === 'X') ? computer = 'O' : computer = 'X';
  console.log(`Computer is ${computer}`);
  const load = document.getElementById('load-screen');
  const board = document.getElementById('game-board');
  const newgame = document.getElementById('new-game');
  console.log(load);
  console.log(board);
  console.log(newgame);
  load.classList.add('hidden');
  board.classList.remove('hidden');
  newgame.classList.remove('hidden');
  //begin();
}

// 1. Builds a Board of playable spaces
// 2. Clears any of the previous styles if game is being reloaded
// 3. Add's event listeners to each tile on the board
function begin() {
  document.querySelector('#message').innerText = "Let's Play!";
  original = Array.from(Array(9).keys());
  for(var count = 0; count < tiles.length; count++) {
    tiles[count].innerText = '';
    tiles[count].classList.remove('disabled');
    tiles[count].classList.remove('winner');
    tiles[count].addEventListener('click', selection, false);
  }
}

// 1. Once event listeners makes call, check if space is already been played on
// 2. Allow human to make a selection
// 3. If computer is playing, first verify if the game has been won or is a tie, then allow the computer to play
function selection(space) {
  if(typeof original[space.target.id] == 'number') {
    turn(space.target.id, human);
    if (!checkStatus(original, human) && !tieGame())
      turn(best(), computer);
  }
}

// 1. Adjust the selection board to place the player's turn in the appropriate space
// 2. Alter the UI game board with the proper icon
// 3. Check to status of the game, if the game has been won or tied, fire off the gameOver function
function turn(id, player) {
  original[id] = player;
  document.getElementById(id).innerText = player;
  if (checkStatus(original, player))
    gameOver(checkStatus(original, player));
}

// 1. Find all of the spaces that the player has played in
// 2. If the player has played a winning combination, return the player name and the winning values
// 3. If no one has won at this point, return null
function checkStatus(board, player) {
  let moves = board.reduce((accum, element, index) => 
    (element === player) ? accum.concat(index) : accum, []);
  let won = null;
  for (let [index, win] of winningCombos.entries()) {
    if (win.every(el => moves.indexOf(el) > -1)) {
      won =  { index: index, player: player };
      break;
    }
  }
  return won;
}

// 1. Launch function for computer's turn, calls MiniMax algorithm to make best available choice
function best() {
  return losing(original, computer).index;
}

// 1. Alter the message area on the UI to declare the appropriate winning message
function declare(who) {
  document.querySelector('#message').innerText = who;
}

// 1. If there are no available tiles to play in, disable the board
// 2. Remove the event listeners to keep players from continuing to play
// 3. Declare a winner and return a true value
// 4. If there are available spaces in the board to play, return a false value
function tieGame() {
  if (empty().length == 0) {
    for (let count = 0; count < tiles.length; count++) {
      tiles[count].classList.add('disabled');
      tiles[count].removeEventListener('click', selection, false);
    }
    declare('Tie Game!')
    return true;
  }
  return false;
}

// 1. Return a value of the amount of empty spaces left
function empty() {
  return original.filter(el => typeof el == 'number');
}

// 1. Loop through the array of winning combinations, and add the winner class to the winning combination tiles
// 2. Remove the event listeners so the human player can not continue to alter the board
// 3. Alter the UI to display the proper message based on who won. Chances are it wasn't the human player
function gameOver(win) {
  for (let index of winningCombos[win.index]) {
    document.getElementById(index).classList.add('winner');
  }

  for (let count = 0; count < tiles.length; count++) {
    tiles[count].removeEventListener('click', selection, false);
  }
  declare(win.player == human ? 'You Win!' : 'You Lose!');
}

// 1. Recursive function that plays through all available spaces left on the board
// 2. Selects the space with the best space for the computer to play in after calling through all available options
// 3. Returns the index of the space for which the computer should play
// MORE INFO -- http://neverstopbuilding.com/minimax
// MORE INFO -- https://en.wikipedia.org/wiki/Minimax
// NOTE -- My function was named 'losing' because the human player should never be able to beat out this sequence
function losing(board, player) {

  // Determine the amount of empty spaces left on the board
  let available = empty(board);     

  // Recursively called to verify if the space played would make the human or computer a winner
  // Assigns a higher value to the computer winning, if human would win on that combination returns a negative value
  if (checkStatus(board, human))
    return { score: -10 };
  else if (checkStatus(board, computer))
    return { score: 10 };
  else if (available.length === 0) 
    return { score: 0 };

  // Systematically plays through the entire game of available options
  let moves = [];
  for (let count = 0; count < available.length; count++) {
    let move = {};
    move.index = board[available[count]];
    board[available[count]] = player;

    if (player == computer) {
      let result = losing(board, human);
      move.score = result.score;
    } else {
      let result = losing(board, computer);
      move.score = result.score;
    }
    board[available[count]] = move.index;
    moves.push(move);
  }

  // Determines which of the available moves has the best points value assigned to it
  // Returns the index space of the simulated board that has the best point value assigned to it
  let best;
  if(player === computer) {
    let temp = -10000;
    for (let count = 0; count < moves.length; count++) {
      if (moves[count].score > temp) {
        temp = moves[count].score;
        best = count;
      } 
    }
  } else {
    let temp = 10000;
    for (let count = 0; count < moves.length; count++) {
      if (moves[count].score < temp) {
        temp = moves[count].score;
        best = count;
      }
    }
  }
return moves[best];
}

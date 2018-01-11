/* 
		Reverse Engineering
		Simon Game Flow

	1. game begins
	2. random move is generated and stored into computer moves
	3. corresponding color is illuminated and sound is played, set intervals for visibility purposes
	4. user then attempts to select the corresponding color or colors depending on length of sequence
	5. once the user has selected a color, that selection is verified against the computer move
	6. if the selection is correct, the sequence continues until all the correct tiles are selected in order, advance at end of sequence
	7. if the selection is incorrect, and strict mode is enabled, the user has lost and the game will be reset
	8. if the selection is incorrect, and strict mode is not enabled, the sequence is replayed and the user is allowed to try again

*/

// Variables -- DOM
const counter = $('#counter');
const reset = $('#reset');
const start = $('#start');
const tile = $('.tile');
const strictMode = $('#mode');
const display = $('#display');

// Variables -- GAME
let user = [];
let comp = [];
let round = 0;
let strict = false;

// Sounds
const sound0 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
const sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
const sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
const sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
const sound5 = new Audio('sounds/error.wav');			// error	https://freesound.org/s/363920/
const sound6 = new Audio('sounds/success.wav');		// win		https://freesound.org/s/353546/

$(document).ready(function() {
	start.click(launchGame);
	tile.click(function() { playerMove(this.id) });
	reset.click(launchGame);
	strictMode.click(gameMode);
});

function launchGame() {
	resetGame();
	generateMove();
	counter.html(round+1);
	flashSequence();
}

function resetGame() {
	user = [];
	comp = [];
	round = 0;
}
	
function gameMode() {
	strict = !strict;
	if(strict) 
		display.html('<h3>Strict Mode Enabled</h3>');
	else
		display.html('<h3>Fun Mode Enabled<h3>');
}

function generateMove() {
	comp.push(Math.floor(Math.random() * 4));
	console.log(`Round ${round} started, sequence is ${comp}`);
}

function flashSequence() {
	let temp = 0;
	let moves = setInterval(function() {
		flashTile(comp[temp]);
		temp++;
		if(temp >= comp.length) {
			clearInterval(moves)
			// console.log(`sequence for round ${round} complete`);
		}
	}, 600);
	user = [];
}

function flashTile(element) {
	// console.log(`Tile ${element} should flash`);
	const flash = $(`#tile-${element}`);
	flash.addClass('clicked');
	playSound(element);
	let time = setTimeout(() => { flash.removeClass('clicked') }, 200);
}

function playerMove(element) {
	const temp = parseInt(element.slice(5));
	user.push(temp);
	flashTile(temp);
	// console.log(`Player chose ${temp}`);
	setTimeout(verifyMove, 400);
}

function verifyMove() {
	if(user[user.length-1] !== comp[user.length-1]) {
		if(strict) {
			// console.log(`You Lose, final round was ${round}`);
			playSound(5);
			alert(`You Lose! New Game!`);
			setTimeout(launchGame, 1000);
		} else {
			// console.log(`Try again!`);
			playSound(5);
			alert(`Wrong Move, try again!`);
			setTimeout(flashSequence, 750);
		}
	} else {
		console.log(`Correct Move!`);
		if(user.length === comp.length) {
			if(round == 19) {
				// console.log(`You have won!`);
				playSound(6);
				alert(`You Win! Congrats!`);
				setTimeout(launchGame, 5000);
			} else {
				// console.log(`Next Round!`);
				round++;
				counter.html(round+1);
				generateMove();
				setTimeout(flashSequence, 750);
			}
		}
	}
}

function playSound(element) {
	switch(element) {
		case 0: sound0.play(); break;
		case 1: sound1.play(); break;
		case 2: sound2.play(); break;
		case 3: sound3.play(); break;
		case 5: sound5.play(); break;
		case 6: sound6.play(); break;
	}
}

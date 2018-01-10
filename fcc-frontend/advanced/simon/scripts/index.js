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

let user = [];
let comp = [];
let round = 0;
let strict = false;

$(document).ready(function() {
	$('#start').click(launchGame);
	$('.tile').click(function() {
		if(round < 20)
			verifyMove(this.id);
	});

});

// Start of game when the user initializes
function launchGame() {
	resetGame();
	generateGame();
	$('#counter').html(round+1);
	flashTile(comp[round]);
}

// Clear all variable stores for a new game
function resetGame() {
	user = [];
	comp = [];
	round = 0;
}

function generateGame() {
	for(let count = 0; count < 20; count++)
		comp.push(Math.floor(Math.random() * 4));
	console.log(comp);
}

function flashTile(element) {
	console.log(`Tile ${element} should flash`);
	const flash = $(`#tile-${element}`);
	flash.addClass('clicked')
	const time = setTimeout(() => { flash.removeClass('clicked') }, 300);
}

function verifyMove(element) {
	const temp = parseInt(element.slice(5));
	user.push(temp);
	flashTile(temp);
	console.log(`Player chose ${temp}`);
	
	if(comp[round] === user[round] && round < 19) {
		console.log(`Success! Player has chosen correctly, next move!`)
		round++;
		console.log(`Round ${round} has started! -->`)
		$('#counter').html(round+1);
		const time = setTimeout(() => { flashTile(comp[round]) }, 300);
	} else if(round == 19) {
		console.log(`You win!`);
		alert(`You Win!`);
	} else if(strict) {
		console.log(`You Lose, final round was ${round}`);
	} else if(!strict){
		console.log(`Try again!`);
	}

}
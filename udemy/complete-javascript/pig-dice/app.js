/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousRoll1, previousRoll2, roundLimit;

newGame();


// FUNCTIONS //////////////////////////////////////////////////////////////////////////////////////
function newGame() {
    document.querySelector('.dice1').style.display = 'none'; 
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';    
    
    roundLimit = prompt('What score would you like to play to?');
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    previousRoll1 = 0;
    previousRoll2 = 0;
    gamePlaying = true;
    
    
    // TEST FUNCTIONS
    console.log('=========================');
    console.log('New Game Initialized');
    console.log('Player 1 Score: ' + scores[0]);
    console.log('Player 2 Score: ' + scores[1]);
    console.log('Active Player: ' + (activePlayer + 1));
    console.log('Round Score reset to: ' + roundScore);
    console.log('Previous Dice 1 Roll: ' + previousRoll1);
    console.log('Previous Dice 2 Roll: ' + previousRoll2);
    console.log('Round Limit set to: ' + roundLimit);
    console.log('=========================');
}

function nextPlayer() {
    roundScore = 0;
    previousRoll1 = 0;
    previousRoll2 = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    
    // TEST FUNCTIONS
    console.log('=========================');
    console.log('Active Player: ' + (activePlayer + 1));
}

// EVENT LISTENERS ////////////////////////////////////////////////////////////////////////////////
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
    
        var diceDOM1 = document.querySelector('.dice1');
        var diceDOM2 = document.querySelector('.dice2');
        
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';
        
        // TEST FUNCTIONS
        console.log('Dice 1 Roll: ' + dice1);
        console.log('Dice 2 Roll: ' + dice2);
        
        if (dice1 === dice2) {
            roundScore = 0;
            scores[activePlayer] = 0;
            alert('You rolled two ' + dice1 + '\s!! You lose all your points!');
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice1 != 1 && dice2 != 1) {
            roundScore += dice1;
            roundScore += dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            alert('You rolled a one! Lose a turn!');
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        scores[activePlayer] += roundScore; 

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        console.log('Player ' + (activePlayer+1) + ' chose to hold');
        console.log('Player ' + (activePlayer+1) + ' Round Score: ' + roundScore);
        console.log('Player ' + (activePlayer+1) + ' Total Score: ' + scores[activePlayer]);
    
        if (scores[activePlayer] >= roundLimit) {
            console.log('Player ' + activePlayer + ' has won the game!');
            
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        } 
    }
});

document.querySelector('.btn-new').addEventListener('click', newGame);


/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer;

init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    //generate random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //Display Result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + dice + '.png';

    //Add roundscore IF dice is not 1 or less
    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else{
        //next player
        nextPlayer();
    }
})


document.querySelector('.btn-hold').addEventListener('click', function(){
    //update score
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check winner
    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = "Winner!"
    }
    else{
        nextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer(){
       activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       roundScore=0;

        document.querySelector('#current-0').textContent = "0";
        document.querySelector('#current-1').textContent = "0";

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('#score-0').textContent = "0";
    document.querySelector('#score-1').textContent = "0";

    document.querySelector('#current-0').textContent = "0";
    document.querySelector('#current-1').textContent = "0";

    document.querySelector('.dice').style.display = "none";
}
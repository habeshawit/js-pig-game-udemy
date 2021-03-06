'use strict';

const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const diceEl = document.querySelector('.dice')
const rollDice = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const newGame = document.querySelector('.btn--new')

let score, currentScore, activePlayer = 0, playing

const init = function(){
	score0El.textContent = 0
	score1El.textContent = 0
	current0El.textContent = 0
	current1El.textContent = 0

	currentScore = 0
	activePlayer = 0
	playing = true
	score = [0,0]
	diceEl.classList.add('hidden')

	player0El.classList.remove('player--winner')
	player1El.classList.remove('player--winner')
	player1El.classList.remove('player--active')
	player0El.classList.add('player--active')
}

//start game
init()

//switch player
const switchPlayer = function(){
	//reset current score to 0
	currentScore = 0
	document.getElementById(`current--${activePlayer}`).textContent = 0

	//switch to next player
	activePlayer = activePlayer === 0 ? 1 : 0

	//switch background color of active player
	player0El.classList.toggle('player--active')
	player1El.classList.toggle('player--active')
}

rollDice.addEventListener('click', function(){
	if(playing){
		const dice = Math.trunc(Math.random()*6) +1
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    //check if 1 is rolled
    if(dice!==1){
       currentScore += dice
			 document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
				switchPlayer()
    }
	}
    
})

hold.addEventListener('click', function(){
	if(playing){
				//add current score to active player score
		score[activePlayer] += currentScore

		//display active player score on hold
		document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
		
		//check if active player wins
		if(score[activePlayer] >= 100){
			playing = false
			diceEl.classList.add('hidden')
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
		} else {
			switchPlayer()
		}
	}
})

newGame.addEventListener('click', function(){
	init()
})
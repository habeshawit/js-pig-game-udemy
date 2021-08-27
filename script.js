'use strict';

const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0El = document.getElementById('player--0')
const player1El = document.getElementById('player--1')
const diceEl = document.querySelector('.dice')
const rollDice = document.querySelector('.btn--roll')
const newRoll = document.querySelector('.btn--new')
const hold = document.querySelector('.btn--hold')

const score = [0,0]

let currentScore = 0
let activePlayer = 0

//initial status
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

rollDice.addEventListener('click', function(){
    const dice = Math.trunc(Math.random()*6) +1
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    //check if 1 is rolled
    if(dice!==1){
       currentScore += dice
			 document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
				currentScore = 0
				document.getElementById(`current--${activePlayer}`).textContent = currentScore
        
				//switch to next player
				activePlayer = activePlayer === 0 ? 1 : 0

				//switch background color of active player
				player0El.classList.toggle('player--active')
				player1El.classList.toggle('player--active')

    }
})

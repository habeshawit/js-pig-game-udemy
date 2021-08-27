'use strict';

const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const rollDice = document.querySelector('.btn--roll')
const newRoll = document.querySelector('.btn--new')
const hold = document.querySelector('.btn--hold')

//initial status
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

rollDice.addEventListener('click', function(){
    diceEl.classList.remove('hidden')
})

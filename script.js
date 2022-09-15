'use strict';

//SESSION 82:PROJECT #3: Pig Game
// // Selecting elements
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice')

// //Starting conditions
// score0El.textContent=0;
// score1El.textContent=0;
// diceEl.classList.add('hidden')

// //SESSION 83-Rolling the dice
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// //Rolling dice functionality
// // Selecting elements
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice')

// //Starting conditions
// score0El.textContent=0;
// score1El.textContent=0;
// diceEl.classList.add('hidden')


// let currentScore=0;
// let whoIsPlaying=0;

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//       // 1. Generating a random dice roll
//       const dice = Math.trunc(Math.random() * 6) + 1;
  
//       // 2. Display dice
//       diceEl.classList.remove('hidden');
//       diceEl.src = `dice-${dice}.png`;
//       //NOTE:Here,once we remove hidden, the original dice-5 png will be displayed. But herewe need to change the img displayed epending upon the number on the dice. for this,we dont have to display using JS. we only need to change the img src attribute of diceEl so that that that dice png pic would be shown corresponding to the number. SO for that we use .src->to manipulate the img src. To duisplay img,which doesnt exist,we need to use something liek appendChild or create element
  
//       // 3. Check for rolled 1
//       if (dice !== 1) {
//         // Add dice to current score
//         currentScore += dice;
//         current0El.textContent=currentScore;
//       } else {
//         // Switch to next player
//       }
//   });

  //SESSION 84: Switching active player
//   const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
// // const playerAct= document.querySelector('.player--active')
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');

// //Rolling dice functionality
// // Selecting elements
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice')

// //Starting conditions
// score0El.textContent=0;
// score1El.textContent=0;
// diceEl.classList.add('hidden')

// let scores=[0,0] //for the total score of each player,to used with textContnet on score0El and 1El
// let currentScore=0;
// let activePlayer=0;

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//       // 1. Generating a random dice roll
//       const dice = Math.trunc(Math.random() * 6) + 1;
  
//       // 2. Display dice
//       diceEl.classList.remove('hidden');
//       diceEl.src = `dice-${dice}.png`;
  
//       // 3. Check for rolled 1
//       if (dice !== 1) {
//         // Add dice to current score
//         currentScore += dice;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//       } else {
//         // Switch to next player
//         currentScore=0;
//         document.getElementById(`current--${activePlayer}`).textContent=currentScore;
//         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');  
//         activePlayer=(activePlayer===0)?1:0;
//         document.querySelector(`.player--${activePlayer}`).classList.add('player--active');  
//         //VVI NOTE:
//         //Instead of using remove and add,we can directly write it as
//         // player0El.classList.toggle('player--active')         
//         // player1El.classList.toggle('player--active')         
//       }
//   });

   //SESSION 85: Holding Current score
   const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// const playerAct= document.querySelector('.player--active')
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Rolling dice functionality
// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice')

//Starting conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden')

let scores=[0,0] //for the total score of each player,to used with textContnet on score0El and 1El
let currentScore=0;
let activePlayer=0;

//NOTE:the below function has acess to the variables declared outside and thats because all of the variables used here,like currentscore and activePlayer,are having global scope. Hence even functions can have acess to it
function switchPlayer()
{
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');  
    activePlayer=(activePlayer===0)?1:0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}

let playing=true;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
      // 1. Generating a random dice roll
      if(playing){
      const dice = Math.trunc(Math.random() * 6) + 1;
  
      // 2. Display dice
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;
  
      // 3. Check for rolled 1
      if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      } else {
        switchPlayer();
      }
    }
  });

  btnHold.addEventListener('click', function () {
    if(playing){
    scores[activePlayer]+=currentScore;
    // NOTE:In the below Case,we could have made use of the variables we created for the classes,but since the below method seems more convinent(using backticks with player activePlayer),thats why we folllowed that way
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    if(scores[activePlayer]>=100)
    {
        // alert(`Player ${activePlayer+1} has won the game.`)
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      playing=false; //ensures that buttons wont work(except for play again),when the gameIsOver
      diceEl.classList.add('hidden');
    }
    else
    {
       switchPlayer();
    }
}
});

btnNew.addEventListener('click', function () {
    //we basically reset all values
    // https://www.w3schools.com/js/js_array_const.asp - const arr
    scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
"use strict";
const scoreP0 = document.querySelector(".scoreP0");
const scoreP1 = document.querySelector(".scoreP1");

const dice = document.querySelector(".diceImage");
let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;
// document.querySelector(".newGame").addEventListener("click", function () {
//   scoreP0.textContent = 0;
//   scoreP1.textContent = 0;
//   document.querySelector(".currentP0").textContent = 0;
//   document.querySelector(".currentP1").textContent = 0;
//   activePlayer = 0;
//   document.querySelector(".Player0").classList.add("activePlayer");
//   document.querySelector(".Player1").classList.remove("activePlayer");
//   document.querySelector(".diceImage").classList.add("hidden");
// });
// document.querySelector(".hold").addEventListener("click", function () {
//   document.querySelector(".currentP0").textContent = currentP0;
//   console.log(currentP0);

//   document.querySelector(".currentP0").textContent = 0;
//   activePlayer = activePlayer == 0 ? 1 : 0;
//   document.querySelector(".currentP1").textContent = currentP1;
//   scoreP1.textContent = currentP1;
//   document.querySelector(".currentP1").textContent = 0;

//   document.querySelector(".Player0").classList.toggle("activePlayer");
//   document.querySelector(".Player1").classList.toggle("activePlayer");
//   currentP0 = 0;
// });

// document.querySelector(".rollDice").addEventListener("click", function () {
//   //1.generate random number
//   let randomNumber = Math.trunc(Math.random() * 6) + 1;
//   //2.display roll dice
//   dice.src = "Images/dice" + randomNumber + ".png";
//   document.querySelector(".diceImage").classList.remove("hidden");

//   if (activePlayer == 0) {
//     currentP0 += randomNumber;
//     scores[0] += currentP0;
//     scoreP0.textContent = scores[0];
//     console.log(currentP0, scores[0]);
//     document.querySelector(".currentP0").textContent = currentP0;

//     console.log(currentP0);
//     // scoreP0.textContent = currentP0;
//     if (randomNumber === 1) {
//       document.querySelector(".currentP0").textContent = 0;
//       scoreP0.textContent = currentP0;
//       console.log(randomNumber, currentP0);
//       activePlayer = activePlayer == 0 ? 1 : 0;
//       document.querySelector(".Player0").classList.toggle("activePlayer");
//       document.querySelector(".Player1").classList.toggle("activePlayer");
//     }

//     if (currentP0 >= 100) {
//       document.querySelector(".headP0").textContent = "Player 1 wins!";
//     }
//   } else {
//     currentP1 += randomNumber;
//     document.querySelector(".currentP1").textContent = currentP1;
//     scoreP1.textContent = currentP1;
//     if (randomNumber === 1) {
//       currentP1 = 0;
//       document.querySelector(".currentP1").textContent = 0;
//       // scoreP1.textContent = currentP1;
//       console.log(randomNumber, currentP1);
//       activePlayer = activePlayer == 0 ? 1 : 0;
//       document.querySelector(".Player0").classList.toggle("activePlayer");
//       document.querySelector(".Player1").classList.toggle("activePlayer");
//     }
//     if (currentP1 >= 100) {
//       document.querySelector(".headP1").textContent = "Player 2 wins!";
//     }
//   }
//});
document.querySelector(".rollDice").addEventListener("click", function () {
  if (playing) {
    //1.generate random number
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    //2.display dice roll
    dice.src = "Images/dice" + randomNumber + ".png";
    document.querySelector(".diceImage").classList.remove("hidden");

    //3. is it 1?
    if (randomNumber === 1) {
      //yes - switch to the other player
      switchPlayer();
    } else {
      //no - add dice roll to the current score
      currentScore += randomNumber;
      document.querySelector(
        `.currentP${activePlayer}`
      ).textContent = currentScore;
      console.log(activePlayer, currentScore, randomNumber);
    }
  }
});

function switchPlayer() {
  document.querySelector(`.currentP${activePlayer}`).textContent = 0;
  currentScore = 0;

  document.querySelector(".Player0").classList.toggle("activePlayerP");
  document.querySelector(".Player1").classList.toggle("activePlayerP");
  activePlayer = activePlayer == 0 ? 1 : 0;
}

document.querySelector(".hold").addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.scoreP${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(".diceImage").classList.add("hidden");

      document.querySelector(`.Player${activePlayer}`).classList.add("winner");
      document
        .querySelector(`.Player${activePlayer}`)
        .classList.remove("activePlayerP");
      console.log(document.querySelector(`.Player${activePlayer}`).textContent);
    } else {
      switchPlayer();
    }
    console.log(scores[activePlayer]);
  }
});

document.querySelector(".newGame").addEventListener("click", function () {
  document.querySelector(`.Player${activePlayer}`).classList.remove("winner");
  playing = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  scoreP0.textContent = 0;
  scoreP1.textContent = 0;
  document.querySelector(".currentP0").textContent = 0;
  document.querySelector(".currentP1").textContent = 0;
  document.querySelector(".Player0").classList.add("activePlayerP");
  document.querySelector(".Player1").classList.remove("activePlayerP");
  document.querySelector(".diceImage").classList.add("hidden");
});

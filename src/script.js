"use strict";

// TODO - write your code here.

// Declare an arrow function named randomDamage that has no parameters and returns a
// random integer between 1 and 10

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

// Declare an arrow function named chooseOption that has two parameters named opt1
// and opt2.chooseOption does two things:
// ○Declares and initializes a variable named randNum to either a 0 or 1, randomly.
// ○Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary
// operator)

const chooseOption = (opt1, opt2) => {
  let randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber) {
    return opt2;
  } else {
    return opt1;
  }
};
//     can also be written as
// const randomNumber = Math.floor(Math.random() * 2);
// return randomNumber ? op2 : op1;

// --------------------------------------------------

// Declare a function expression named attackPlayer that has one parameter named
// health which returns a number equal to health minus the result of the randomDamage
// function

const attackPlayer = function (health) {
  return health - randomDamage();
};

// Declare an arrow function named logHealth that has two parameters named player
// and health which has a console.log method to state the following message: “player
// health: health”.

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

// Declare an arrow function named logDeath that has two parameters named winner
// and loser which has a console.log method to state the following message: “winner
// defeated loser”

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Alex", "John", 20, 20);

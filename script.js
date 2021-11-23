let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the new secret target number
const generateTarget = () => {
  return Math.floor(Math.random() * 9)
};

// Get the distance from guess to target 
const getAbsoluteDistance = (guess, target) => {
  return Math.abs(guess - target);
}

//  Compare target to determine wich gess is closest to the target
const compareGuesses = (currentHumanGuess, compGuess, target) => {
    if (getAbsoluteDistance(currentHumanGuess, target) <= getAbsoluteDistance(compGuess, target)) {
      return true;
    } else {
      return false;
    }
}


// Uptdate Score increase the winner's score after each round
const updateScore = winner => {
    switch (winner) {
    case 'human':
     humanScore += 1;
     break;
    case 'computer':
     computerScore += 1;
    break;
    }
}

// Update the round number after each round
const advanceRound = () => {
  currentRoundNumber += 1;
}


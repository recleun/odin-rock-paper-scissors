function isBetween(n, a, b) {
  return n >= a && n <= b;
}

function getCPUChoice() {
  let choiceInt = Math.round((Math.random() * 10)) * 3 + 1;
  choiceInt > 30 ? choiceInt = 30 : choiceInt;
  if (choiceInt <= 10) {
    return 'rock';
  } else if (isBetween(choiceInt, 11, 20)) {
    return 'paper';
  } else if (isBetween(choiceInt, 21, 30)) {
    return 'scissors';
  }
}

function getPlayerChoice() {
  let choice;
  while(!choice || choice != 'rock' && choice != 'paper' && choice != 'scissors') {
    choice = prompt('What\'s your choice?').toLowerCase();
  }
  return choice;
}

function game() { 
  const PlayerChoice = getPlayerChoice();
  const CPUChoice = getCPUChoice();
  
  console.group('Choices')
  console.log(`Player: ${PlayerChoice}`);
  console.log(`CPU: ${CPUChoice}`);
  console.groupEnd('Choices');
  
  if (
    (PlayerChoice === 'rock' && CPUChoice === 'scissors') ||
    (PlayerChoice === 'paper' && CPUChoice === 'rock') ||
    (PlayerChoice === 'scissors' && CPUChoice === 'paper')
  ) {
    console.log(`Player beat CPU ~ ${PlayerChoice} beats ${CPUChoice}`);
    return 'player';
  } else if (PlayerChoice === CPUChoice) {
    console.log(`Tie ~ ${PlayerChoice} ties with ${CPUChoice}`);
    return 'tie';
  } else {
    console.log(`CPU beat Player ~ ${CPUChoice} beats ${PlayerChoice}`);
    return 'cpu';
  }
}

let PlayerScore = 0;
let CPUScore = 0;
let roundNo = 1;

while (PlayerScore < 3 && CPUScore < 3 && roundNo <= 5) {
  const winner = game();
  if (winner === 'player') {
    PlayerScore++;
  } else if (winner === 'cpu') {
    CPUScore++;
  }
  roundNo++;
}

console.log(`Winner is: ${PlayerScore > CPUScore ? 'Player' : 'CPU'}`);

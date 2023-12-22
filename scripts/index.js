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

const score = document.querySelector('.score');
const message = document.querySelector('.message');

let PlayerScore = 0;
let CPUScore = 0;

function resetScores() {
  PlayerScore = 0;
  CPUScore = 0;
}

function setScoreString() {
  score.textContent = `Player: ${PlayerScore} - ${CPUScore} :CPU`;
}

function playRound(PlayerChoice) { 
  const CPUChoice = getCPUChoice();
  if (
    (PlayerChoice === 'rock' && CPUChoice === 'scissors') ||
    (PlayerChoice === 'paper' && CPUChoice === 'rock') ||
    (PlayerChoice === 'scissors' && CPUChoice === 'paper')
  ) {
    message.textContent = `Player beat CPU ~ ${PlayerChoice} beats ${CPUChoice}`;
    PlayerScore++;
    setScoreString();
  } else if (PlayerChoice === CPUChoice) {
    message.textContent = `Tie ~ ${PlayerChoice} ties with ${CPUChoice}`;
  } else {
    message.textContent = `CPU beat Player ~ ${CPUChoice} beats ${PlayerChoice}`;
    CPUScore++;
    setScoreString();
  }
  if (PlayerScore >= 5 || CPUScore >= 5) {
    const winner = PlayerScore > CPUScore ? 'Player' : 'CPU';
    const loser = winner == 'Player' ? 'CPU' : 'Player';
    message.textContent = `${winner} beat ${loser} - Winner is ${winner}`;
    resetScores();
    setScoreString();
  }
}

const buttons = document.querySelector('.buttons');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

buttons.addEventListener('click', element => {
  if (element.target == rock) {
    playRound('rock');
  } else if (element.target == paper) {
    playRound('paper');
  } else if (element.target == scissors) {
    playRound('scissors');
  }
});

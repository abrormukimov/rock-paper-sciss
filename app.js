let computerPlay = () => {
    let newArray = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random(newArray) * 3);
    return choice;
}

let playerCounter = 0;
let computerCounter = 0;

let playRound = (playerSelection, computerSelection) => {
    computerPlay();

    if (playerSelection === computerSelection) {
        paragraph.innerHTML = `It is a tie!
        Your score: ${playerCounter}     Computer's score: ${computerCounter}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerCounter++;
        paragraph.innerHTML = `You lose! ${playerSelection} beats ${computerSelection}
        Your score: ${playerCounter}     Computer's score: ${computerCounter}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper' ||
        playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerCounter++;
        paragraph.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!
        Your score: ${playerCounter}     Computer's score: ${computerCounter}`;
    }
    div.appendChild(paragraph);
    if (playerCounter == 3 || computerCounter == 3) {
        endOfGame();
    }
}

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');


rock.addEventListener('click', (e) => {
    playRound(e.target.textContent);
});

paper.addEventListener('click', (e) => {
    playRound(e.target.textContent);
});

scissors.addEventListener('click', (e) => {
    playRound(e.target.textContent);
});

let div = document.getElementById('display');
let paragraph = document.createElement('p');

function endOfGame() {
    let anotherP = document.createElement('p');
    if (playerCounter > computerCounter) {
        anotherP.innerHTML = 'You win!';
    } else {
        anotherP.innerHTML = 'Computer wins!';
    }
    div.appendChild(anotherP);

    let playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', () => {
        reset();
    });

    div.appendChild(playAgainButton);

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function reset() {
    playerCounter = 0;
    computerCounter = 0;
    display.innerHTML = `Your score: ${playerCounter}     Computer's score: ${computerCounter}`;
    display.removeChild(display.lastChild);
    display.removeChild(display.lastChild);

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}
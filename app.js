let computerPlay = () => {
    let newArray = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random(newArray) * 3);
    return newArray[choice];
}

let playerCounter = 0;
let computerCounter = 0;

let playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        paragraph.innerHTML = `It is a tie!

        Your score: ${playerCounter}     Computer's score: ${computerCounter}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerCounter++;
        paragraph.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!

        Your score: ${playerCounter}     Computer's score: ${computerCounter}`;
    } else {
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
div.style.textAlign = 'center';
div.style.fontSize = '22px';

function endOfGame() {
    let anotherP = document.createElement('p');
    if (playerCounter > computerCounter) {
        anotherP.textContent = 'You win!';
    } else {
        anotherP.textContent = 'Computer wins!';
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

    let buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.classList.add('disable-hover');
    });
}

function reset() {
    playerCounter = 0;
    computerCounter = 0;
    paragraph.innerHTML = `Your score: ${playerCounter}     Computer's score: ${computerCounter}`;
    div.removeChild(div.lastChild);
    div.removeChild(div.lastChild);

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    let buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.classList.remove('disable-hover');
    });
}
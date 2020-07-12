var rockIcon = document.querySelector(".rockImage");
var paperIcon = document.querySelector(".paperImage");
var scissorIcon = document.querySelector(".scissorImage");
var StartMessage = document.querySelector(".StartMessage");
var resultsMessage = document.querySelector(".resultsMessage");
var playAgainButton = document.querySelector(".playAgain");

var playScore = document.querySelector(".playerScore");
var cpuScore = document.querySelector(".cpuScore");

var playerScoreCount = 0;
var cpuScoreCount = 0;

var playerChoiceRock = "Rock";
var playerChoicePaper = "Paper";
var playerChoiceScissors = "Scissors";

var storeResults;

rockIcon.addEventListener("click", function clickRock() {
    var cpuChoice = cpuRandomPicker();
    whoGetsAPoint(playerChoiceRock, cpuChoice);
    updateResultMessage(playerChoiceRock, cpuChoice, storeResults);
    StartMessage.style.visibility = "hidden";
    bestOfFive();
});

paperIcon.addEventListener("click", function clickPaper() {
    var cpuChoice = cpuRandomPicker();
    whoGetsAPoint(playerChoicePaper, cpuChoice);
    updateResultMessage(playerChoicePaper, cpuChoice, storeResults);
    StartMessage.style.visibility = "hidden";
    bestOfFive();
});

scissorIcon.addEventListener("click", function clickScissor() {
    var cpuChoice = cpuRandomPicker();
    whoGetsAPoint(playerChoiceScissors, cpuChoice);
    updateResultMessage(playerChoiceScissors, cpuChoice, storeResults);
    StartMessage.style.visibility = "hidden";
    bestOfFive();
});

function updateResultMessage(playerOnePick, cpuChoice, whoGetsAPoint) {
    resultsMessage.innerHTML = `<div class="roundMessage"> Player one's pick = <span class="highlightPicks">${playerOnePick}</span> <br/> <br/> CPU's pick = <span class="highlightPicks">${cpuChoice}</span> <br/><br/> <span class="highlightRoundWinner">${whoGetsAPoint} </span></div>`;
}

function updatePlayerScore() {
    playerScoreCount++;
    playScore.innerHTML = playerScoreCount;
}

function updateCpuScore() {
    cpuScoreCount++;
    cpuScore.innerHTML = cpuScoreCount;
}

function cpuRandomPicker() {
    var cpuPick;
    var randNumber = Math.floor(Math.random() * 15);

    switch (randNumber) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            cpuPick = "Rock";
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            cpuPick = "Paper";
            break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            cpuPick = "Scissors";
            break;
        default:
            alert(`number not found ${randNumber}`);
            break;
    }
    return cpuPick;
}

function whoGetsAPoint(playerChoice, cpuChoice) {
    var bothChoices = `${playerChoice} ${cpuChoice}`;

    switch (bothChoices) {
        case "Rock Rock":
        case "Paper Paper":
        case "Scissors Scissors":
            storeResults = "its a draw";
            break;
        case "Rock Scissors":
        case "Paper Rock":
        case "Scissors Paper":
            storeResults = "player one wins!!";
            updatePlayerScore();
            break;
        case "Scissors Rock":
        case "Rock Paper":
        case "Paper Scissors":
            storeResults = "CPU wins!!";
            updateCpuScore();
            break;
    }
}

function bestOfFive() {

    if (playerScoreCount >= 5) {
        resultsMessage.innerHTML = `<div class="finalResultsMessagePlayerWins"><h2>Game Over <br/> You Win</h2></div>`;
        document.querySelector(".gameIcons").style.visibility = "hidden";
        playItAgain();
    } else if (cpuScoreCount >= 5) {
        resultsMessage.innerHTML = `<div class="finalResultsMessageCpuWins"><h2>Game Over CPU Wins</h2></div>`;
        document.querySelector(".gameIcons").style.visibility = "hidden";
        playItAgain();
    }
}

function playItAgain() {
    playAgainButton.innerHTML = "<p>play again</p>";
    playAgainButton.classList.add("playAgainButton");
}

playAgainButton.addEventListener("click", function(){
    location.reload();
});
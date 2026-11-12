let playerScore = 0;
let cpuScore = 0;

let roundNo = 0;
let highestScore = Number(localStorage.getItem("highestScore")) || 0;
let hasVisited = false;
let resetClicked = false;

const choice = document.querySelectorAll(".moveButton");
const message = document.querySelector(".sectionHeading");
const playState = document.querySelector(".playButton");
const roundNoDisplay = document.querySelector("#roundNoValue");
const highestScoreDisplay = document.querySelector("#highestScoreValue");

highestScoreDisplay.innerHTML = highestScore;

const showWinner = (userWin) => {
    if (userWin) {

        message.style.display = "block";
        message.innerText = "You WIN!!";
        message.style.color = "rgb(22, 236, 22)";

        playerScore += 1;

        document.querySelector(".playerScore").innerText = playerScore;
    }
    else {

        message.innerText = "You Lose!!";
        message.style.color = "red";
        cpuScore += 1;
        document.querySelector(".cpuScore").innerText = cpuScore;
    }
};

const drawGame = () => {
    message.style.display = "block";
    message.innerText = "Its a draw!";
    message.style.color = "yellow";
};

const getCompChoice = () => {
    const options = ["rockButton", "paperButton", "scissorsButton"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const displayUserChoice = (userChoice) => {
    if (userChoice === "rockButton") {
        document.getElementById("playerPlaceholder").innerHTML = "✊";
    }
    else if (userChoice === "paperButton") {
        document.getElementById("playerPlaceholder").innerHTML = "✋";
    }
    else if (userChoice === "scissorsButton") {
        document.getElementById("playerPlaceholder").innerHTML = "✌️";
    }
};

const displayCompChoice = (compChoice) => {
    if (compChoice === "rockButton") {
        document.getElementById("cpuPlaceholder").innerHTML = "✊";
    }
    else if (compChoice === "paperButton") {
        document.getElementById("cpuPlaceholder").innerHTML = "✋";
    }
    else if (compChoice === "scissorsButton") {
        document.getElementById("cpuPlaceholder").innerHTML = "✌️";
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    displayUserChoice(userChoice);
    displayCompChoice(compChoice);

    if (userChoice == compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rockButton") {
            userWin = compChoice === "paperButton" ? false : true;
        }
        else if (userChoice === "paperButton") {
            userWin = compChoice === "rockButton" ? true : false;
        }
        else if (userChoice === "scissorsButton") {
            userWin = compChoice === "paperButton" ? true : false;
        }
        showWinner(userWin);
    }
};


choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        hasVisited = true;
        playState.innerHTML = "RESET!!";
        playGame(userChoice);
        document.querySelector(".gameMessage").innerHTML = "Choose your move to keep playing";
    });
});


playState.addEventListener("click", () => {
    if (hasVisited == false) {
        playState.innerHTML = "Please begin the round";
    }
    else {
        hasVisited = false;
        roundNo++;
        document.getElementById("roundNoValue").innerHTML = roundNo;
        
        if (highestScore < playerScore) {
            highestScore = playerScore;
            localStorage.setItem("highestScore", highestScore);
        }
        highestScoreDisplay.innerHTML = highestScore;

        message.style.display = "none";
        playState.innerHTML = "Last round Score : " + playerScore;
        playerScore = 0;
        document.querySelector(".playerScore").innerText = playerScore;
        cpuScore = 0;
        document.querySelector(".cpuScore").innerText = cpuScore;
        document.getElementById("playerPlaceholder").innerHTML = "?";
        document.getElementById("cpuPlaceholder").innerHTML = "?";

        document.querySelector(".gameMessage").innerHTML = "Round Completed. Make your move to play another round";
    }



});


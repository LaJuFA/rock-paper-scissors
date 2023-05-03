function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1

    return (choiceNumber == 1) ? "Rock"
         : (choiceNumber == 2) ? "Paper"
         : "Scissors";  
}

function playRound(playerChoice) {

    const cpuChoice = getComputerChoice()
    let result = "Draw";

    console.log(cpuChoice);

    if (playerChoice.toUpperCase() == "Rock".toUpperCase()) {

        switch (cpuChoice) {

            case "Scissors":
                result = "You win! Rock beats Scissors";
            break;

            case "Paper":
                result = "You lose! Paper beats Rock";
            break;
        }

    } else if (playerChoice.toUpperCase() == "Paper".toUpperCase()) {
    
        switch (cpuChoice) {

            case "Rock":
                result = "You win! Paper beats Rock";
            break;

            case "Scissors":
                result = "You lose! Scissors beats Paper";
            break;
        }

    } else {

        switch (cpuChoice) {

            case "Paper":
                result = "You win! Scissors beats Paper";
            break;

            case "Rock":
                result = "You lose! Rock beats Scissors";
            break;
        }

    }

    return result;
}

const botones = document.getElementsByClassName('btn');
console.log(botones);

for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function (e) {
            console.log(e.target.id);
            console.log(playRound(e.target.id));
        });
}
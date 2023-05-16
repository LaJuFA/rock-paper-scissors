function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1

    return (choiceNumber == 1) ? "Rock"
         : (choiceNumber == 2) ? "Paper"
         : "Scissors";  
}

function appendResult(result) {

    const ronda = document.createElement('p');
    ronda.textContent = result;

    resultados.appendChild(ronda)
}

function playRound(playerChoice) {

    const cpuChoice = getComputerChoice()
    let result = "Draw";

    console.log(cpuChoice);
    console.log(playerChoice);

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

    if (result.startsWith('You win!')) {
        puntosJugador += 1;
    } else if (result.startsWith('You lose!')) {
        puntosCpu += 1;
    }

    appendResult(`Player: ${playerChoice} vs CPU: ${cpuChoice}`);
    appendResult(`Puntos jugador: ${puntosJugador} / Puntos CPU: ${puntosCpu}`)

    return puntosJugador === 5 ? `${result} | Se terminaron las 5 rondas ¡Ganaste!`
            : puntosCpu === 5 ? `${result} | Se terminaron las 5 rondas ¡Perdiste!`
            : `${result}`;

}

const resultados = document.querySelector("#resultados")
const botones = document.getElementsByClassName('btn');

let puntosJugador = 0;
let puntosCpu = 0;

for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function (e) {
        if (puntosJugador < 5 && puntosCpu < 5)  {
            appendResult(playRound(e.currentTarget.id));
        } else {
            window.alert("¡Se terminaron las 5 rondas!")
        }
    });
}

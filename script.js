const result = document.querySelector(".result");
const scoreHuman = document.querySelector("#myScore")
const scoreAlexa = document.querySelector("#scoreAlexa")

let scoreHumanNumber = 0
let scoreAlexaNumber = 0

// ENUMS
const GAME_OPTIONS ={ 

    ROCK: "rock",
    PAPER: "paper",
    SCISSOR:"scissor",

}



const playHuman = (human) => {
    playTheGame(human, playMachine());
};

const playMachine = () => {
    const machineChoice = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSOR];
    const randomNumber = Math.floor(Math.random() * 3);

    return machineChoice[randomNumber];
};

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Empatou";
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSOR) ||
        (human === GAME_OPTIONS.SCISSOR && machine === GAME_OPTIONS.PAPER)
    ) {
        scoreHumanNumber++
        scoreHuman.innerHTML = scoreHumanNumber
        result.innerHTML = "Você ganhou!";

    } else {
        scoreAlexaNumber++
        scoreAlexa.innerHTML = scoreAlexaNumber
        result.innerHTML = "Você perdeu para Alexa!";
    }



    console.log("humano: " + human + "machine: " + machine);
};

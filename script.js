let greeting = "Hello World!";

console.log(greeting)

function getComputerChoice(max){

    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0){
        
        return "Rock"
    }
    else if (computerChoice === 1){
        return "Paper"
    }
    else if (computerChoice === 2){
        return "Scissors"
    }
    else {
        return "Error"
    }

    }

function getHumanChoice(){
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice
} 

// function getHumanChoice(){
//     let humanChoice = parseInt(prompt("Rock, paper, or scissors? 0=Rock, 1=Paper, 2=Scissors."));
//     switch (humanChoice){
//         case 0:
//             humanChoice = "Rock";
//             return humanChoice
//             // break;
//         case 1:
//             humanChoice = "Paper";
//             return humanChoice
//             // break;
//         case 2:
//             humanChoice = "Scissors";
//             return humanChoice
//             // break;
//     }
// } 

let humanScore = 0;
let computerScore = 0;

// Game function
function playRound(computerChoice, humanChoice){
    
}

const humanThrow = getHumanChoice();
const computerThrow = getComputerChoice();

console.log(getComputerChoice(3))
console.log(getHumanChoice())
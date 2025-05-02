let greeting = "Hello World!";

console.log(greeting)

function getComputerChoice(max){

    let computerAnswer = Math.floor(Math.random() * max);
    if (computerAnswer === 0){
        
        return "Rock"
    }
    else if (computerAnswer === 1){
        return "Paper"
    }
    else if (computerAnswer === 2){
        return "Scissors"
    }
    else {
        return "Error"
    }

    }

// function getHumanChoice(){
//     let humanChoice = prompt("Rock, paper, or scissors?");
//     return humanChoice
// } 

function getHumanChoice(){
    let humanChoice = parseInt(prompt("Rock, paper, or scissors? 0=Rock, 1=Paper, 2=Scissors."));
    switch (humanChoice){
        case 0:
            humanChoice = "Rock";
            return humanChoice
            // break;
        case 1:
            humanChoice = "Paper";
            return humanChoice
            // break;
        case 2:
            humanChoice = "Scissors";
            return humanChoice
            // break;
    }
} 

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice(3))
console.log(getHumanChoice())
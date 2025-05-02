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

function getHumanChoice(){
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice
}    

console.log(getComputerChoice(3))
console.log(getHumanChoice())
let greeting = "Hello World!";

console.log(greeting)

function getComputerChoice(max){

     Math.floor(Math.random() * max);
    if (getComputerChoice === 0){
        ;
        return "Rock"
    }
    else if (getComputerChoice === 1){
        return "Paper"
    }
    else if (getComputerChoice === 2){
        return "Scissors"
    }
    else {
        return "Error"
    }

    }


console.log(getComputerChoice(3))
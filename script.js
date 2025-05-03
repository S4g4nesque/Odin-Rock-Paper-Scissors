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



// Game function
function playRound(computerChoice, humanChoice){
    
    let humanScore = 0;
    let computerScore = 0;

    // Draw conditions
    if (humanChoice === computerChoice){
        return "Draw! Computer also threw " + humanChoice + " Play again!"
        
    }
    // player loss conditions
    else if ((humanChoice==="Rock" && computerChoice==="Paper") || (humanChoice==="Paper" && computerChoice==="Scissors") || (humanChoice==="Scissors" && computerChoice==="Rock")){
        computerScore++
        return "Unlucky, computer threw " + computerChoice + " , try again!"
    }
    // player win conditions
        else if ((humanChoice==="Rock" && computerChoice==="Scissors") || (humanChoice==="Paper" && computerChoice==="Rock") || (humanChoice==="Scissors" && computerChoice==="Paper")){
            humanScore++ 
            return "You win! Computer threw " + computerChoice
        }
    
}

const humanThrow = getHumanChoice();
const computerThrow = getComputerChoice();

console.log(getComputerChoice(3))
console.log(getHumanChoice())
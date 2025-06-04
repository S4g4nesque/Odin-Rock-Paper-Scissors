
function getComputerChoice(max){

    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0){
        computerChoice = "Rock";
        return computerChoice
    }
    else if (computerChoice === 1){
        computerChoice = "Paper";
        return computerChoice
    }
    else if (computerChoice === 2){
        computerChoice = "Scissors";
        return computerChoice
    }
    else {
        return "Error"
    }

    }

function getHumanChoice(){
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice
} 


let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice(3);

let humanScore = 0;
let computerScore = 0;

// Game function




function playGame(){

    function playRound(computerChoice, humanChoice){
    
        computerChoice = computerChoice.toLowerCase();
        humanChoice = humanChoice.toLowerCase();
    
        // Draw conditions
        if (humanChoice===computerChoice){
            return "Draw! Computer also threw " + humanChoice + ". Play again!";    
        }
        // player loss conditions
        else if ((humanChoice==="rock" && computerChoice==="paper") || 
                 (humanChoice==="paper" && computerChoice==="scissors") || 
                 (humanChoice==="scissors" && computerChoice==="rock")){
            computerScore++
            return "Unlucky, computer threw " + computerChoice + " , try again!";
        }
        // player win conditions
            else if ((humanChoice==="rock" && computerChoice==="scissors") || 
                     (humanChoice==="paper" && computerChoice==="rock") || 
                     (humanChoice==="scissors" && computerChoice==="paper")){
                humanScore++ 
                return "You win! Computer threw " + computerChoice;
            }
        }    

    while (computerScore && humanScore <= 0){
        alert("One more round!");
        console.log(playRound(computerChoice, humanChoice))
    }

    if (computerScore === 3){
        return "Game over, computer won best out of 5!"
    }
    else (humanScore === 3){
        return "Game over, you win best out of 5!"
    }

}


// function playGame(){




//     if (playRound() === "Draw! Computer also threw " + humanChoice + ". Play again!" ||
//         playRound() === "Unlucky, computer threw " + computerChoice + " , try again!"||
//         playRound() === "You win! Computer threw " + computerChoice)
//         return getComputerChoice(), getHumanChoice(), playRound(computerChoice, humanChoice)
// }    

function showScores(){
    return "human score: " + humanScore + ". computer score:" + computerScore;
}


console.log(playGame())
// console.log(playRound(computerChoice, humanChoice))
console.log(showScores())



// OLD CODE

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

// console.log(getHumanChoice())
// console.log(getComputerChoice(3))

// // while ((humanScore || computerScore) < 3){
// //     playRound(computerChoice, humanChoice);
// }    
    
// console.log(playRound(computerChoice, humanChoice))

// const humanThrow = getHumanChoice();
// const computerThrow = getComputerChoice();


// // while ((humanScore || computerScore) < 3){
// //     playRound(computerChoice, humanChoice);
// }    
    
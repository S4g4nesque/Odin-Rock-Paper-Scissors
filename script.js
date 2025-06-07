
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

    while (computerScore < 3 && humanScore < 3){

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(3);

        let result = playRound(computerChoice, humanChoice);
        console.log(result);
        alert(result);
    }

    if (computerScore === 3){
        return alert("Game over, computer won best out of 5!");
    }
    else if (humanScore === 3){
        return alert("Game over, you win best out of 5!");
    }
  
}


function showScores(){
    return "human score: " + humanScore + ". computer score:" + computerScore;
}


console.log(playGame());
console.log(showScores());


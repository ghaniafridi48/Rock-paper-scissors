/*
1. generate computer choice 
2. get human choice
3. compare and decide winner
4. display result of each round
5. 5 total rounds


*/



// 1. generate computer choice 
 
function getComputerChoice(){
let randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0){
      return "rock"
    }
        else if(randomNum ===1){
          return "paper"
        }
          else{
            return "scissors";
          }  
}


// 2. get human choice

function getHumanChoice(){
  return prompt("enter your choice"); 
}


function playGame(){

  let humanScore = 0;
  let computerScore = 0;

  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  
  function playRound(humanChoice,computerChoice){
    
    if (humanChoice === computerChoice) {
      return "its a tie : your choice " + humanChoice + " vs computer choice: " + computerChoice;
    } else if(
      humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock"  ||
      humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return "human won" ;
    } else{
      computerScore++;
      return "you lost";
    }
  
  
  }

  console.log(playRound(humanChoice,computerChoice));
  


}




playGame();

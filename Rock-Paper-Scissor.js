/*
1. generate computer choice 
2. get human choice
3. compare and decide winner
4. display result of each round
5. 5 total rounds


*/





// 1. generate computer choice 
// multiply 3 to get values in range 0-2 when floor function is used
 
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
// keeps track of overall game score
  let computerScore = 0;
  let humanScore = 0;
  
  
  function playRound(humanChoice,computerChoice) {
    // avoid letter casing issues , result is always in lowercase ROCK becomes rock
    humanChoice = humanChoice.toLowerCase(); 
    
    if (humanChoice === computerChoice) {
      console.log(`its a tie❗❗\n your choice =  ${humanChoice} \n computer choice =  ${computerChoice}`);
      
    }else if (
      humanChoice === 'rock' && computerChoice === 'scissors' ||
      humanChoice === 'paper' && computerChoice === 'rock' ||
      humanChoice === 'scissors' && computerChoice === 'paper'){
  
      console.log(`you won 🎉\n ${humanChoice} beats ${computerChoice}\n your choice =  ${humanChoice} \n computer choice =  ${computerChoice}`)
      humanScore++;
  
    }else{
      console.log(` you lost❌\n ${computerChoice} beats ${humanChoice} \n your choice =  ${humanChoice} \n computer choice =  ${computerChoice}`)
      computerScore++;
    }
      
  }
  // loop the rounds 5 times to get different input each time
  for (let i=1; i<= 5 ; i++){
    console.log(`ROUND ${i}`);
    
  let humanSelection = getHumanChoice();
  let computerSelection= getComputerChoice();
  playRound(humanSelection,computerSelection);
  }

  // results
  console.log(`--------------------------\nRESULTS`);
  
  if (computerScore === humanScore) {
    console.log(`its a tie\n computer won ${computerScore} rounds \n you won ${humanScore} rounds`);
  }else if (computerScore > humanScore){
    console.log(`you lost the game\n computer won ${computerScore} rounds \n you won ${humanScore} rounds`);
  }else{
     console.log(`you won the game\n computer won ${computerScore} rounds \n you won ${humanScore} rounds`);
  }

  // show the rounds that resuted in a tie 
  console.log(`TIE ROUNDS : ${5 - (humanScore + computerScore)} `);

}


playGame();

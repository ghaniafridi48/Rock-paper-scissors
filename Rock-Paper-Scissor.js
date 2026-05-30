/*
1. generate computer choice 
    1.1 math.random() to generate random number (Math.random() generates a decimal between 0.0 (inclusive) and 1.0 (exclusive))
    1.2 multiply with 10 to shift decimal 1 place to the right.
    1.3 math.floor() to convert to int.
    1.4 store the result in a variable called randomNum.
    1.5 return choice based on conditions.
2. get human choice
3. compare and decide winner
4. display result of each round
5. 5 total rounds


*/

// 1. generate computer choice 
 
function getComputerChoice(){
let randomNum = Math.floor(Math.random() * 10);
let computerChoice ;
    if(randomNum <= 2){
       computerChoice = "rock";
    }
        else if(randomNum >= 7){
          computerChoice =  "paper";      
        }
        else{
           computerChoice = "scissor";
        }
    return console.log(computerChoice);
    
}


// 2. get human choice

function getHumanChoice(){
  let humanChoice = prompt("enter your choice");
  console.log(humanChoice);
  
}


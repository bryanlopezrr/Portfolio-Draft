/*
    Global variables to keep track of the score on this website
    The userScore and compScore are initalized to zero and will be manipulated later
*/
let userScore = 0;
let compScore = 0; 

const user_laber = document.getElementById("user-label");
const computer_label = document.getElementById("comp-label");

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score"); 

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

/* The options for the program to work accordingly */
const rock_div = document.getElementById("r"); 
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* Variables for small lettering to emphasize which choice is which */
const smallUserName = "user".fontsize(4).fontcolor("gray").sub();
const smallComputerName = "computer".fontsize(4).fontcolor("gray").sub();

/* This function comprises of the rules of the game and depending on the combination 
   of string characters, I am able to determine who wins and loses
*/ 
function game(userChoice){
    const computerChoice = getComputerChoice()
  
    switch(computerChoice + userChoice){
        case "rs": 
        case "pr": 
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        default:
            tie(userChoice, computerChoice);
            break;
    }
}
/* This function will just convert the letter choice to a full word to output to the screen */
function convertChoiceToWord(letter){
    if(letter === "r"){
        return "Rock";
    }
    else if(letter === "s"){
        return "Scissors";
    }
    else{
        return "Paper";
    }
}

function tie(userChoice, computerChoice){
    result_p.innerHTML = convertChoiceToWord(userChoice) + smallUserName + " === " + 
                         convertChoiceToWord(computerChoice) + smallComputerName  + " Its a tie";
                         
    /* Looking for suggestions on how to loop through a collection here and get each item to glow without
       having to repeat code mulple times like I do below v */
    document.getElementById('r').classList.add('gray-glow');
    document.getElementById('p').classList.add('gray-glow');
    document.getElementById('s').classList.add('gray-glow');
    
    setTimeout(function(){document.getElementById('r').classList.remove('gray-glow')}, 1200);
    setTimeout(function(){document.getElementById('p').classList.remove('gray-glow')}, 1200);
    setTimeout(function(){document.getElementById('s').classList.remove('gray-glow')}, 1200);
    /* ------------------------------------------------------------------------------------------------ */
}

/*Function to increase users score, and print the desired output */
function win(userChoice, computerChoice){
    userScore++; 
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = convertChoiceToWord(userChoice) + smallUserName + " beats " + 
                         convertChoiceToWord(computerChoice) + smallComputerName + " You win!!";

    /* Looking for suggestions on how to loop through a collection here and get each item to glow without
       having to repeat code mulple times like I do below v */
    document.getElementById('r').classList.add('green-glow');
    document.getElementById('p').classList.add('green-glow');
    document.getElementById('s').classList.add('green-glow');

    setTimeout(function(){document.getElementById('r').classList.remove('green-glow')}, 1200);
    setTimeout(function(){document.getElementById('p').classList.remove('green-glow')}, 1200);
    setTimeout(function(){document.getElementById('s').classList.remove('green-glow')}, 1200);
    /* ------------------------------------------------------------------------------------------------ */
    
}

/*Function to increase computers score, and print the desired output */
function lose(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = convertChoiceToWord(computerChoice) + smallComputerName+ " beats " + 
                         convertChoiceToWord(userChoice)  + smallUserName + " You lose!!";

     /* Looking for suggestions on how to loop through a collection here and get each item to glow without
        having to repeat code mulple times like I do below v */
    document.getElementById('r').classList.add('red-glow');
    document.getElementById('p').classList.add('red-glow');
    document.getElementById('s').classList.add('red-glow');

    setTimeout(function(){document.getElementById('r').classList.remove('red-glow')}, 1200);
    setTimeout(function(){document.getElementById('p').classList.remove('red-glow')}, 1200);
    setTimeout(function(){document.getElementById('s').classList.remove('red-glow')}, 1200);
    /* ------------------------------------------------------------------------------------------------ */
}

/* Function to randomize the computer choice */
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    let x = Math.floor((Math.random()*3));
    return choices [x]; 
}


function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })


    paper_div.addEventListener('click', function(){
        game("p");
    })


    scissors_div.addEventListener('click', function(){
        game("s");
    })

}

main();
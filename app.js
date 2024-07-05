let userScore = 0;
let computerScore = 0;
const usrScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choice = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];


}
// console.log(getComputerChoice());

function convertToWord(letter){
    if(letter ==="r") {
        return  "Rock";
    }
    else if ( letter === "p"){
        return "Paper";

    }
    else{
        return "Scissors"
    }
}

function win(userChoice,computerChoice){
    // console.log("wins");
    userScore++;
    // console.log(userScore);
    usrScore_span.innerHTML = userScore;
    computerScore_span.innerHTML  = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥`;
    // console.log(user);
    // console.log(computer);
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(()=>
        document.getElementById(userChoice).classList.remove('green-glow')
    ,300);

}



function lose(userChoice,computerChoice){
    // console.log("loses");
    // computerScore++;
    // console.log(computerScore);
    // usrScore_span.innerHTML = userScore;
    // computerScore_span.innerHTML  = computerScore;
     // console.log("wins");
     computerScore++;
    //  console.log(userScore);
     usrScore_span.innerHTML = userScore;
     computerScore_span.innerHTML  = computerScore;
     const smallUserWord = "user".fontsize(3).sup();
     const smallCompWord = "comp".fontsize(3).sup();
 
     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost.....💩`;
     // console.log(user);
     // console.log(computer);
     document.getElementById(userChoice).classList.add('red-glow');
     setTimeout(()=>
        document.getElementById(userChoice).classList.remove('red-glow'),300);

}
function draw(userChoice,computerChoice){
    // console.log("draw");
     // console.log("wins");
     
    //  console.log(userScore);
     usrScore_span.innerHTML = userScore;
     computerScore_span.innerHTML  = computerScore;
     const smallUserWord = "user".fontsize(3).sup();
     const smallCompWord = "comp".fontsize(3).sup();
 
     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws to ${convertToWord(computerChoice)}${smallCompWord}. That's a Draw 🧐`;
     // console.log(user);
     // console.log(computer);
     document.getElementById(userChoice).classList.add('gray-glow');
     setTimeout(()=>
        document.getElementById(userChoice).classList.remove('gray-glow'),300);

}




function game(userChoice){
    const computerChoice = getComputerChoice();
    // console.log("userChoice => " + userChoice);
    // console.log("computerChoice => " + computerChoice);

    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            // console.log("USER WINS!");
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":    
            // console.log("USER LOSES!");
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);    
            // console.log("DRAW!");
            break;    
    }

    // const name = "pine";
    // switch (name){
    //     case "apple":{
    //         console.log("this is apple");
    //     }
    //     case "pine":{
    //         console.log("this a pine");
    //     }
    // }



    // const name = "david";
    // if(name === "david"){
    //         console.log('hello');
    // }
    // else if(name === "pinapple"){
    //     console.log("hey!");
    // }



   
}
// game("c");


function main(){
    rock_div.addEventListener('click',()=> 
        // console.log("hey you clicked on rock");
        game("r")
    );
    paper_div.addEventListener('click',()=> 
        // console.log("hey you clicked on paper");
        game("p"));
    scissors_div.addEventListener('click',()=> 
        // console.log("hey you clicked on scissors");
        game("s"));
}
main();




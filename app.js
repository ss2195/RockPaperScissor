console.log("Hello");
let USER_SCORE = 0;
let COMP_SCORE = 0;

const USER_SCORE_SPAN = document.getElementById("user-score")  
const COMP_SCORE_SPAN = document.getElementById("comp-score")
const SCOREBOARD_DIV = document.querySelector(".score-board")
const RESULT_DIV = document.querySelector(".result >p")


const ROCK_DIV = document.getElementById("r")
const PAPER_DIV = document.getElementById("p")
const SCISSOR_DIV = document.getElementById("s")

function convertToWord(word){
    if(word=="r")
        return "ROCK";
    if(word == "p")
        return "PAPER"
    return "SCISSOR";
}

function win(userChoice, compChoice){
    USER_SCORE++;
    USER_SCORE_SPAN.innerHTML = USER_SCORE;
    const smallUserWord  = "USER".fontsize(3).sub()
    const smallCompWord  = "COMPUTER".fontsize(3).sub()
    const userChoice_div = document.getElementById(userChoice)
    RESULT_DIV.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord} You Win!!`;
    userChoice_div.classList.add("greenglow");
    setTimeout(()=>
        userChoice_div.classList.remove("greenglow"),300);

}
function lose(userChoice, compChoice){
    COMP_SCORE++;
    COMP_SCORE_SPAN.innerHTML = COMP_SCORE;
    const smallUserWord  = "USER".fontsize(3).sub()
    const smallCompWord  = "COMPUTER".fontsize(3).sub()
    const userChoice_div = document.getElementById(userChoice)
    RESULT_DIV.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}. You Lose!!`;
    userChoice_div.classList.add("redglow");
    setTimeout(()=>userChoice_div.classList.remove("redglow"),300);

}
function draw(userChoice, compChoice){
    RESULT_DIV.innerHTML = `It is a Draw`;
    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add("yellowglow");
    setTimeout(()=>userChoice_div.classList.remove("yellowglow"),300);
}

function getComputerChoice(){
    const CHOICES = ['r','p','s'];
    const idx = Math.floor(Math.random()*3);
    return CHOICES[idx];
}

function game(userChoice){
    const COMPUTER_CHOICE = getComputerChoice();
    console.log("UserChoice ==>",userChoice)
    console.log("ComputerChoice ==> ", COMPUTER_CHOICE)
    switch (userChoice+COMPUTER_CHOICE){
        case "rs":
        case "sp":
        case "pr":
            console.log("User WINS");
            win(userChoice,COMPUTER_CHOICE);
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("User LOSES");
            lose(userChoice,COMPUTER_CHOICE);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("DRAW");
            draw(userChoice,COMPUTER_CHOICE);
            break;

    }
        


}

function main(){
    ROCK_DIV.addEventListener('click',()=>game("r"))

    PAPER_DIV.addEventListener('click',()=>game("p"))

    SCISSOR_DIV.addEventListener('click',()=>game("s"))

}

main();


const input=document.getElementById("name")
const n=document.querySelector(".pnmae")
const rock=document.querySelector(".opt1")
const paper=document.querySelector(".opt2")
const scissor=document.querySelector(".opt3")
const msg=document.getElementById("game")
let s1=document.querySelector(".s1")
let s2=document.querySelector(".s2")
let score1=0
let score2=0
input.addEventListener("change",() => {
    if(input.value ===''){
        n.textContent= "Player 1"
    }else{
    n.textContent =  input.value}
})

function computer(){
    let arr=["Rock","Paper","Scissor"]
    let index=Math.floor(Math.random()*3)
    return arr[index]
}
function game(playerchoice,computerchoice){
    if(playerchoice === "Rock" && computerchoice === "Scissor"){
        msg.textContent = `${n.textContent} Wins!!! ${n.textContent} choose ${playerchoice} & Computer choose ${computerchoice}`;
        s1.textContent++;
        score1++;
        if(score1 === 5){
            setGameOver();
        }
    }
    else if(playerchoice === "Paper" && computerchoice === "Rock"){
        msg.textContent = `${n.textContent} Wins!!! ${n.textContent} choose ${playerchoice} & Computer choose ${computerchoice}`;
        s1.textContent++;
        score1++;
        if(score1 === 5){
            setGameOver();
        }
    }
    else if(playerchoice === "Scissor" && computerchoice === "Paper"){
        msg.textContent = `${n.textContent} Wins!!! ${n.textContent} choose ${playerchoice} & Computer choose ${computerchoice}`;
        s1.textContent++;
        score1++;
        if(score1 === 5){
            setGameOver();
        }
    }
    else if(playerchoice === "Paper" && computerchoice === "Scissor"){
        msg.textContent = `Computer Wins!!! ${n.textContent} choose ${playerchoice} & Computer choose ${computerchoice}`;
        s2.textContent++;
        score2++;
        if(score2 === 5){
            setGameOver();
        }
    }
    else if(playerchoice === "Rock" && computerchoice === "Paper"){
        msg.textContent = `Computer Wins!!! ${n.textContent} choose ${playerchoice} & Computer choose ${computerchoice}`;
        s2.textContent++;
        score2++;
        if(score2 === 5){
            setGameOver();
        }
    }
    else if(playerchoice === "Scissor" && computerchoice === "Rock"){
        msg.textContent = `Computer Wins!!! ${n.textContent} choose ${playerchoice} & Computer choose ${computerchoice}`;
        s2.textContent++;
        score2++;
        if(score2 === 5){
            setGameOver();
        }
    }
    else{
        msg.textContent="Both Choose Same Value";
    }
}
function r()
{
    game("Rock",computer());
}
function s()
{
    game("Scissor",computer());
}
function p()
{
    game("Paper",computer());
}
rock.addEventListener("click",r)
scissor.addEventListener("click",s)
paper.addEventListener("click",p)

function setGameOver() {
    rock.disabled = true;
    scissor.disabled = true;
    paper.disabled = true;
    if(s1.textContent == '5'){
        msg.textContent=`${input.value.toUpperCase()} WINS!!!!`;
        msg.style.color="pink";
    }
    else{
        msg.textContent=`COMPUTER WINS!!!!`;
        msg.style.color="pink";
    }
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame() {
    s1.textContent=0;
    s2.textContent=0;
    score1=0;
    score2=0;
    msg.textContent="";
    n.textContent= "Player 1";
    input.value='';
    input.focus();
    msg.style.color="greenyellow";
    resetButton.parentNode.removeChild(resetButton);
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
}

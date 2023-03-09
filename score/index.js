var score1=document.getElementById("t1")
var score2=document.getElementById("t2")

let s1=0
let s2=0
function inc1(){
    s1+=1
    score1.innerText=s1
    high()
}
function inc2(){
    s1+=2
    score1.innerText=s1
    high()
}
function inc3(){
    s1+=3
    score1.innerText=s1
    high()
}
function inc4(){
    s2+=1
    score2.innerText=s2
    high()
}
function inc5(){
    s2+=2
    score2.innerText=s2
    high()
}
function inc6(){
    s2+=3
    score2.innerText=s2
    high()
}
let h=document.getElementById("t")
function high(){
if(s1>s2){
    score1.style.backgroundColor="pink";
    score2.style.backgroundColor="black";
}
else if(s2>s1){
    score2.style.backgroundColor="pink";
    score1.style.backgroundColor="black";
}
else{
    score2.style.backgroundColor="black";
    score1.style.backgroundColor="black";    
}
}
function reset(){
    score1.innerText=0
    score2.innerText=0
    s1=0
    s2=0
    score2.style.backgroundColor="black";
    score1.style.backgroundColor="black";
}


const gameboard=(function(){
    let arr=[];
    let arr_xcoordinates=[];
    let arr_ocoordinates=[];
    for(let i=0;i<9;i++){
        let ele=document.createElement("button");
        ele.classList.add("element");
        ele.setAttribute("id",i+1);
        arr.push(ele);
    }
    return {
        arr,arr_ocoordinates,arr_xcoordinates
    };
})();
const player=(state,name)=>{
    let player_state="active";
    let player_name=name;
    return {player_state,player_name};
};
let player1=player("active","yash");
let player2=player("unactive","piyush");
function displayboard(){
    let container=document.getElementById("cont")
    gameboard.arr.forEach(ele => {
        ele.addEventListener("mouseover",() => {
            ele.style.backgroundColor="rgb(237, 204, 161)";
        });
        ele.addEventListener("mouseout",() => {
            ele.style.backgroundColor="rgb(240, 179, 100)";
        });
        container.appendChild(ele);
    });
    play_game()
};
const play_game=()=>{ 
    gameboard.arr.forEach(ele => {
        ele.addEventListener("click",()=>{
            if(player1.player_state=="active"){
                ele.innerText="X";
                gameboard.arr_xcoordinates.push(ele.getAttribute("id"));
                player1.player_state="unactive";
                player2.player_state="active";
            }
            else if(player2.player_state=="active"){
                ele.innerText="O";
                gameboard.arr_ocoordinates.push(ele.getAttribute("id"));
                player1.player_state="active";
                player2.player_state="unactive";
            }
            ele.style.backgroundColor="rgb(240, 179, 100)";
            ele.style.animationPlayState="running"
            setTimeout(()=>
            ele.style.animationPlayState="paused",300);
            ele.disabled=true;
            check_win();
        })
    });
};
function check_win(){
    let message=document.getElementById("message");
    let count=0;
    gameboard.arr.forEach(ele => {
        if(!ele.innerText==''){
            count++;
        }
    });
    if(count==9){
        message.innerText=`GAME TIE!!!!!!!!`;
        game_over();
    }
    let xc=gameboard.arr_xcoordinates;
    let oc=gameboard.arr_ocoordinates;
    if((xc.includes('1')&&xc.includes('2')&&xc.includes('3'))||(xc.includes('4')&&xc.includes('5')&&xc.includes('6'))||(xc.includes('7')&&xc.includes('8')&&xc.includes('9'))||(xc.includes('1')&&xc.includes('4')&&xc.includes('7'))||(xc.includes('2')&&xc.includes('5')&&xc.includes('8'))||(xc.includes('3')&&xc.includes('6')&&xc.includes('9'))||(xc.includes('1')&&xc.includes('5')&&xc.includes('9'))||(xc.includes('3')&&xc.includes('5')&&xc.includes('7'))){
        message.innerText=`${player1.player_name.toUpperCase()} WINS!!!!!!!!`;
        game_over();
    }
    else if((oc.includes('1')&&oc.includes('2')&&oc.includes('3'))||(oc.includes('4')&&oc.includes('5')&&oc.includes('6'))||(oc.includes('7')&&oc.includes('8')&&oc.includes('9'))||(oc.includes('1')&&oc.includes('4')&&oc.includes('7'))||(oc.includes('2')&&oc.includes('5')&&oc.includes('8'))||(oc.includes('3')&&oc.includes('6')&&oc.includes('9'))||(oc.includes('1')&&oc.includes('5')&&oc.includes('9'))||(oc.includes('3')&&oc.includes('5')&&oc.includes('7'))){
        message.innerText=`${player2.player_name.toUpperCase()} WINS!!!!!!!!`;
        game_over();
    }
}
function game_over(){
    gameboard.arr.forEach(ele => {
        ele.disabled=true;
    })
    let reset=document.createElement("button");
    reset.setAttribute("id","reset");
    reset.setAttribute("class","rest");
    reset.innerText="Start New Game";
    reset.style.position="absolute";
    reset.style.top=`630px`;
    let message=document.getElementById("message");
    document.body.appendChild(reset);
    reset.addEventListener('click', resetGame);
}
function resetGame(){
    gameboard.arr.forEach(ele => {
        ele.disabled=false;
        ele.innerText='';
        ele.style.animationPlayState="paused";
    })
    gameboard.arr_ocoordinates=[];
    gameboard.arr_xcoordinates=[];
    message.innerText='';
    player1.player_state="active";
    player2.player_state="unactive";
    let rn=document.querySelectorAll('.rest');
    let ena=Array.from(rn);
    ena.forEach(ele => {
        ele.parentNode.removeChild(ele);
    })
}
displayboard();
// winning conditions -
// [1,2,3]
// [4,5,6]
// [7,8,9]
// [1,4,7]
// [2,5,8]
// [3,6,9]
// [1,5,9]
// [3,5,7]
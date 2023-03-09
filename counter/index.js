
let countEl = document.getElementById("count-el") 
let prev=document.getElementById("previous")


let count = 0 

function increment() {
    count += 1
    countEl.innerText = count 
}

function save(){
    let nw = ' ' +count + ' - '
    prev.innerText+=nw
    count=0
    countEl.textContent=count
    
}

function  reset(){
    prev.innerText="Previous Entries -"
}


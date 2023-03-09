// to access html elements
let countEl = document.getElementById("count-el") // pass in arguments
let prev=document.getElementById("previous")


let count = 0 //initialize the variable

// function to increment
// specify this increment in html tag using onclick attribute
function increment() {
    count += 1
    countEl.innerText = count //.innertext is used to select text inside the html tag
    
}

function save(){
    let nw = ' ' +count + ' - '
    // prev += count + ' - ' 
    prev.innerText+=nw
    count=0
    countEl.textContent=count
    // console.log(count)
}

function  reset(){
    prev.innerText="Previous Entries -"
}

// instead of .innertext we can use textContent bcoz innertext shows only human readable elements

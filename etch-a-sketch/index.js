const cont=document.querySelector(".container")
let n=document.querySelector('.inputname')
n.addEventListener("change",nw);
function create(){
    for(let i=0;i<n.value**2;i++){
        let di=document.createElement('div');
        di.classList.add("d");
        di.style.cssText=`width:calc(720px/${n.value});height:calc(720px/${n.value})`;
        cont.appendChild(di);
        
    } 
    let arr=['black','blue','red','yellow','green','purple','skyblue','lightgreen','pink'];
    let a=document.querySelectorAll('.d')
    let s=Array.from(a);
    s.forEach(item => {
        item.addEventListener('mouseover',()=>{
            let index=Math.floor(Math.random()*9);
            item.classList.toggle(arr[index])})
            // better way to give random color
            // e.target.setAttribute("style", `background-color:rgb(${getRandomInt(50, 255)}, ${getRandomInt(50, 255)}, ${getRandomInt(50, 255)});`);
            // function getRandomInt(min, max) {
            //     min = Math.ceil(min);
            //     max = Math.floor(max);
            //     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
            // }
    })
}
function nw(){
    if(document.querySelector('.d')){
        let di=document.querySelectorAll(".d")
        let arr=Array.from(di);
        for(let i=0;i<arr.length;i++){
            cont.removeChild(arr[i]);
        }
    }
    // function emptyGrid() {
    //     while (grid.firstChild) {
    //         grid.removeChild(grid.firstChild);
    //     }
    // }
    // better way to remove all child elements
    create();
}
create();


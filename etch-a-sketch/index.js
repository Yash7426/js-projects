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
    console.log(a)
    let s=Array.from(a);
    console.log(s)
    s.forEach(item => {
        item.addEventListener('mouseover',()=>{
            let index=Math.floor(Math.random()*9);
            console.log(index)
            console.log(arr[index])
            item.classList.toggle(arr[index])})
            // e.target.setAttribute("style", `background-color:rgb(${getRandomInt(50, 255)}, ${getRandomInt(50, 255)}, ${getRandomInt(50, 255)});`);
            // function getRandomInt(min, max) {
            //     min = Math.ceil(min);
            //     max = Math.floor(max);
            //     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
            // }
            // better way to give random color
        console.log(item);
        // index=Math.floor(Math.random()*6);

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

// hov=document.querySelectorAll(".d")
// let arrnew=Array.from(hov);
// for(let i=0;i<arrnew.length;i++){
//     arrnew[i].addEventListener("mouseover",cha);
// }
// let arrnew=Array.from(hov);
// for(let i=0;i<arrnew.length;i++){
//     arrnew[i].addEventListener("mouseover",cha);
// }

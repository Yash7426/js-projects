let library=[];
let btn=document.getElementById("new")
btn.addEventListener("click",add);
let n=document.querySelector("#name");
let t=document.querySelector("#title");
let p=document.querySelector("#page");
let r=document.querySelector("#read");
let ur=document.querySelector("#read1");
class Book{
    constructor(n,t,no){
        this.name=n;
        this.title=t;
        this.no_of_pages=no;
    }
}
let i=0;
let cont=document.querySelector(".container")
function add(){
    let book= new Book(n.value,t.value,p.value);
    if(r.checked){
        book.read_status=r.value;
        r.checked=false;
    }else{
        book.read_status=ur.value;
        ur.checked=false;
    } 
    library.push(book);
    n.value='';
    t.value='';
    p.value='';
    let d=document.createElement("div");
    d.setAttribute("class",`class${i}`)
    let text=
    `<ul>
    <li>Author Name : ${book.name}</li>
    <li>Title : ${book.title}</li>
    <li>No. of Pages : ${book.no_of_pages}</li>
    <li>Read Status : ${book.read_status}</li>
    </ul>
    <input type="button" value="Change Read Status" name="toggle" id="togg" onclick="tg(${i})">
    <input type="button" value="Delete Book" name="delete" id="del" onclick="del(${i})">
    `
    d.innerHTML=text;
    cont.appendChild(d);
    book={};
    i++;
    n.focus();
    showAll();
}

function del(i){
    d=document.querySelector(`.class${i}`)
    cont.removeChild(d)
}
function tg(i){
    let o=library[i];
    if(o.read_status===r.value){
        o.read_status=ur.value;
    }else{
        o.read_status=r.value;
    } 
    d=document.querySelector(`.class${i}`)
    let text=
    `<ul>
    <li>Author Name : ${o.name}</li>
    <li>Title : ${o.title}</li>
    <li>No. of Pages : ${o.no_of_pages}</li>
    <li>Read Status : ${o.read_status}</li>
    </ul>
    <input type="button" value="Change Read Status" name="toggle" id="togg" onclick="tg(${i})">
    <input type="button" value="Delete Book" name="delete" id="del" onclick="del(${i})">
    `
    d.innerHTML=text;
}
last=document.querySelector(".last")
function showAll(){
    last.innerHTML=``;
    for(let i=0;i<library.length;i++){
        let d1=document.createElement("div");
        d1.setAttribute("class",`c${i}`)
        let text =
        `<ul>
        <li>Author Name : ${library[i].name}</li>
        <li>Title : ${library[i].title}</li>
        <li>No. of Pages : ${library[i].no_of_pages}</li>
        <li>Read Status : ${library[i].read_status}</li>
        </ul>
        `
        d1.innerHTML=text;
        last.appendChild(d1);
    }
}

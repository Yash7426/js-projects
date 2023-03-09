const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let p1=document.getElementById("pass1")
let p2=document.getElementById("pass2")
let l=document.getElementById("l")
let check=document.getElementById("sym")
function generatePassword(){
    let pass1=""
    let pass2=""
    if(check.checked){
        for(let i=0; i < l.value; i++){
            pass1+=characters[Math.floor(Math.random()*characters.length)]
            pass2+=characters[Math.floor(Math.random()*characters.length)]
            console.log(pass1)
        }
        p1.innerText=pass1
        p2.innerText=pass2
    }
    else{
        for(let i=0; i < l.value; i++){
            pass1+=alpha[Math.floor(Math.random()*alpha.length)]
            pass2+=alpha[Math.floor(Math.random()*alpha.length)]
            console.log(pass1)
        }
        p1.innerText=pass1
        p2.innerText=pass2
    }

}


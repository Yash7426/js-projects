let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result=document.getElementById("sum-el")
function add(){
    let ans=num1+num2
    result.textContent= "Sum: " + ans
    ans=0
}
function sub(){
    let ans=num1-num2
    result.textContent= "Sum: " + ans
    ans=0
}
function div(){
    let ans=num1/num2
    result.textContent= "Sum: " + ans
    ans=0
}
function mul(){
    let ans=num1*num2
    result.textContent= "Sum: " + ans
    ans=0
}



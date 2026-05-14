let num1 ;
let num2 ;
let result = document.getElementById("result");

function add(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    result.textContent = "Result: ";
    let a = Number(num1) + Number(num2);
    console.log(a);
    result.innerText += a;
}
function minus(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    result.textContent = "Result: ";
    let a = Number(num1) - Number(num2);
    console.log(a);
    result.innerText += a;
}
function multiply(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    result.textContent = "Result: ";
    let a = Number(num1) * Number(num2);
    console.log(a);
    result.innerText += a;
}
function divide(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    result.textContent = "Result: ";
    let a = Number(num1) / Number(num2);
    console.log(a);
    result.innerText += a;
}
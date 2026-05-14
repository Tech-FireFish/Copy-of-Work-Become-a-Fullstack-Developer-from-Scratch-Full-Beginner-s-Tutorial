// document.getElementById("count").innerText = 5;
let count = 0;
let countEl = document.getElementById("count");
console.log(count);

function increment() {
    count += 1;
    countEl.innerText = count;
}
let saveStr = document.getElementById("saveEl");
function save(){
    saveStr.innerText += " " + count + " -";
    count=0;
    countEl.textContent = 0;
}
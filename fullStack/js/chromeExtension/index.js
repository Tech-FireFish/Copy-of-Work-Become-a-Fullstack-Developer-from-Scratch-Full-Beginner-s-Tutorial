
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ulEl");
const li = document.createElement("li");
const localStorageLeads = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if(localStorageLeads){
    myLeads = localStorageLeads;
    renderLeads(myLeads);  
}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);
    });

});

inputBtn.addEventListener("click", function(){
    console.log("The following is from listener");
    myLeads.push(inputEl.value);
    console.log("The array is "+ myLeads);
    //localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    
    inputEl.value = "";
    renderLeads(myLeads);
});

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads = [];
    ulEl.innerHTML = myLeads;
});

function renderLeads(arrayList){
    // ulEl.innerHTML += `
    // <li>
    //     <a href='${inputEl.value}' target='_blank'> 
    //     ${inputEl.value} 
    //     </a>
    // </li>`;

    let a = "";
    for (i=0; i<arrayList.length;i++){
        a += `
        <li>
        <a href='${arrayList[i]}' target='_blank'>
        ${arrayList[i]} 
        </a>
        </li>`;
    }
    ulEl.innerHTML = a;
}

// function test (){
//     for (i=0;i<10;i++){
//         console.log(i);
//     }
//     console.log("done");
// }
// test();

// li.textContent = myLeads[i];
// ulEl.append(li);
// console.log(ulEl);

// ulEl.innerHTML += "" ;
// const c = "Per";
// const b = "Sender";
// const a = ` Hey ${c}!
// How is it going? 
// Cheers ${b}`;
// console.log(a);

// function add(num1, num2){
//     return num1 + nu m2;
// }
// console.log(add(3,4));
// console.log(add(9,102));
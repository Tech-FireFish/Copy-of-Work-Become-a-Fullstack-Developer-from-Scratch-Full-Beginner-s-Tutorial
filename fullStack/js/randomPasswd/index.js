let characters =["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":","\"","<",">","?","-","[","]",",",".","/","`","~"];
let output = document.getElementById("output");
let length = document.getElementById("length");

// characters.push("!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":","\"","<",">","?","-","[","]",",",".","/","`","~");
//Extra
let checkNumber = document.getElementById("number");
let checkSymbol = document.getElementById("symbol");

function passwd(){
    if (checkNumber.checked === true){
        for (i=0;i<characters.length;i++){
            if (characters[i] === "1" || characters[i] === "2" || characters[i] === "3" || characters[i] === "4" || characters[i] === "5" || characters[i] === "6" || characters[i] === "7" || characters[i] === "8" || characters[i] === "9" || characters[i] === "0" ){
                characters.splice(i,1);
            }
        }
    }
    if (checkSymbol.checked === true){
        for (i=0;i<characters.length;i++){
            if (characters[i] === "!" || characters[i] === "@" || characters[i] === "#" || characters[i] === "$" || characters[i] === "%" || characters[i] === "^" || characters[i] === "&" || characters[i] === "*" || characters[i] === "(" || characters[i] === ")" || characters[i] === "_" || characters[i] === "+" || characters[i] === "{" || characters[i] === "}" || characters[i] === "|" || characters[i] === ":" || characters[i] === "\"" || characters[i] === "<" || characters[i] === ">" || characters[i] === "?" || characters[i] === "-" || characters[i] === "[" || characters[i] === "]" || characters[i] === "," || characters[i] === "." || characters[i] === "/" || characters[i] === "`" || characters[i] === "~"){
                characters.splice(i,1);
            }
        }
    }
    if (length.value == ""){
    length.value = 20;
}
    let a = "";
for (i=0;i<length.value;i++){
    a += characters[Math.floor(Math.random()*characters.length)];
}
console.log(a);
output.textContent =  a;
}

//Extra feature: copy on click, length adjuster, symbol/number on/off
function copy(){
    navigator.clipboard.writeText(output.textContent)
    .then(()=>{
        alert("Passwd is copied to clipboard");
    })
    .catch(err =>{
        console.log("Something went wrong", err);
    })
}

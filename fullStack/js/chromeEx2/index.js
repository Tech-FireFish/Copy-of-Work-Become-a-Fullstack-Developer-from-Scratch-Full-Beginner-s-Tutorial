const inputNumber = document.getElementById("inputNumber");
inputNumber.addEventListener("input",function(){
    console.log(inputNumber.value);
});
const convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener("click",function(){
    console.log("Convert button is clicked");
    convertTable();
    lengthConverter();
});
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
//Units conversion factors
const meterToFeet = 3.28084;
const literToGallon = 0.264172;
const kiloToPound = 2.20462;
function convertTable(){
    console.log(length);
    console.log(volume);
    console.log(mass);
}
function lengthConverter(){
    //Length
    let a = (inputNumber.value * meterToFeet).toFixed(3);
    let b = (inputNumber.value / meterToFeet).toFixed(3);
    length.innerHTML = `<p>${inputNumber.value} meters = ${a} feet |
    ${inputNumber.value} feet = ${b} meters </p>`
    //Volume
    let c = (inputNumber.value * literToGallon).toFixed(3);
    let d = (inputNumber.value / literToGallon).toFixed(3);
    volume.innerHTML = `<p>${inputNumber.value} liters = ${c} gallons |
    ${inputNumber.value} gallons = ${d} liters </p>`
    //Mass
    let e = (inputNumber.value * kiloToPound).toFixed(3);
    let f = (inputNumber.value / kiloToPound).toFixed(3);
    mass.innerHTML = `<p>${inputNumber.value} kilograms = ${e} pounds |
    ${inputNumber.value} pounds = ${f} kilograms </p>`
}


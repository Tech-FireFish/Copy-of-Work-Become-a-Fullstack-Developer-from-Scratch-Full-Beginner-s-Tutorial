
import {} from "./data.js";

// fetch('https://apis.scrimba.com/bored/api/activity')
//     .then(response=>response.json())
//     .then(data=> console.log(data))
//     .then(data=> {
        
//     })
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => {
//         const imageElement = document.createElement('img');
//         imageElement.src=data.message;
//         console.log(imageElement);
//         imageElement.alt='ran';
//         document.getElementById('img-container').appendChild(imageElement);
//     })
async function getStatus(){
    const response = await fetch('https://apis.scrimba.com/bored/api/activity');
    const data = await response.json()
    console.log(data);
}
getStatus();
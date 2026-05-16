
import {} from "./data.js";

// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(c=>{
//         console.log(c);
//         const imageContainer = document.createElement('img');
//         imageContainer.src=c.message;
//         document.getElementById('image-container').appendChild(imageContainer)
//     })

// fetch('https:apis.scrimba.com/bored/api/activity')
//     .then(response=>response.json())
//     .then(data=>console.log(data.activity))
//     .then(data=>{
//         const board = document.createElement('h1');
//         board.textContent = data.activity;
//         document.getElementById('image-container').appendChild(board);
//     })

async function getActivity(){    
    const response = await fetch('https:apis.scrimba.com/bored/api/activity');
    const data = await response.json();
    console.log(data);

}
getActivity();

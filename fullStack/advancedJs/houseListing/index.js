
import {houses} from './data.js';
const getPropertyHtml = (data) => {
    return data.map((array) => {
        const {location, price, description, space, image} = array;
        return  `
            <div class="outside">
                <img height="280px" width="400px" alt="image of the house" src="${image}">
                <div class="inside">
                <h1>${location}</h1>
                <p>$${price}</p>
                <p>${description}</p>
                <p style="font-weight:bold">${space} m^2</p>
                </div>
            </div>`;
    })

    // let b = null;
    // data.forEach((array) => {
    // const a = `
    //         <div class="outside">
    //             <img height="280px" width="400px" alt="image of the house" src="${image}">
    //             <div class="inside">
    //             <h1>${location}</h1>
    //             <p>$${price}</p>
    //             <p>${description}</p>
    //             <p style="font-weight:bold">${space} m^2</p>
    //             </div>
    //         </div>`;
    //     b += a;
    // });
    // return b;
}
document.getElementById('board').innerHTML += getPropertyHtml(houses);

//const a = `
//             <div class="outside">
//                 <img width="400px" alt="image of the house" src="images/AustinTX.jpg">
//                 <div class="inside">
//                 <h1>Location of the house</h1>
//                 <h2>Price of the house</h2>
//                 <p>Description of the house</p>
//                 <p>Space of the house</p>
//                 </div>
//             </div>
// `;

// const board = document.getElementById("board");
// console.log(board);
// const text = "Thank you for all your hard work throughtout the year!";
// const createLetters = (sender,...name) => {
//     name.forEach(name => {
//     const a = `
//     <div>
//     <p>Dear ${name}</p>
//     <p>${text}</p>
//     <p>Best wishes,</p>
//     <p>${sender}</p>
//     </div>
//     `
//     board.innerHTML += a;
//     });
// }
// createLetters("BIG BROTHER",'Dave','Leon','Mike','Sarah');

// function setPermission(permissionLevel, ...rest){
//     rest.forEach(i => console.log(`${i} now has ${permissionLevel} level access`));
//     // console.log(`${rest} now has ${permissionLevel} level access`);
// }
// setPermission('admin','Dave','Leon','Mike','Sarah');

// const traveledMiles = [100,345,567,875,126];
// let total = 0;
// traveledMiles.map(sum => total += sum);
// const total = traveledMiles.reduce((acc,curr) => acc+curr,0);
// console.log(total);

// const traveledMiles = [100,345,567,875,126];
// console.log(traveledMiles);
// const traveledKm = traveledMiles.map(distance => Math.round(distance*1.6));
//.map() gives new value after function.
// console.log(traveledKm);
// const traveledMiless = {first:123,};
// console.log(traveledMiless);

// const speedWarning = (limit, speed) => {
//     `The limit speed is ${limit} mph. `
//     if (speed <= limit) {
//         return `you are driving whithin the ${limit} mph limit.`;
//     }else{
//         return `Slow down the speed. You're going at ${speed}mph!`;
//     }
// }
// console.log(speedWarning(30,40));

// const a = (amount) => `Is working? ${amount}`;
// console.log(a(9999));

// import {getStockData} from '/utility.js';
// console.log(getStockData());
// setInterval(()=>{
//     console.log(getStockData());
// },1500);


// let stockInfo = {
//         name:"Tech Corp",
//         Symbol:"TC",
//         Price: 120,
//         Time: new Date(),
// }
// const change = (Math.random()*2).toFixed(2) * (stockInfo.Price);
// change.toFixed(2);
// console.log(change);
// const info = stockInfo.Price > change ? " Price went up"
// :stockInfo.Price < change ? " Price went down"
// :" Price uncahnged";
// stockInfo.Price = change + info;
// console.log(info);
// console.log(new Date())
// setTimeout(()=>{
//     console.log(stockInfo);
// },1500);

// while (true){
//     setTimeout(()=>{
//     console.log(stockInfo());
//     },1500);
// }
// setTimeout(3000,console.log(stockInfo()));

// const numSet = BigInt(88347629109561654);
// console.log(numSet);

// function sample(username){
//     if(username){
//         console.log(username);
//     }else{
//         console.log(new Error("NO username provided"));
//         throw new Error("NO username provided");
//         console.log("Invisible");
//     }
// }
// sample("root");
// sample();

// const date = new Date();
// console.log(`Copyright ${date.getFullYear().toString() - Math.floor(Math.random()*10 + 1)} all rights reserved.`);

// import { multiply } from './utility.js';
// const result = multiply(2,3,4);
// console.log(result);

// const start = performance.now();
// setTimeout(() => {
//     const end = performance.now();
//     console.log(`${end - start}`);
// }, 1000);

// function test2(a){
//     console.log(`You time is stolen ${a}`);
// }
// const a = setTimeout(test2, 3000, ":>");
// console.log(a);
// clearTimeout(a);

// const a = "Time";
// function test(){
//     console.log("3 seconds past");
// }
// setTimeout(test, 3000);

// const dreamHoliday = {
//     destination: 'Imingation Land',
//     activity: 'burst of desires',
//     accommodation:'Outdoor grassland',
//     companion:'X'
// }
// const {destination, activity, accommodation, companion} = dreamHoliday;
// console.log(`To be in ${destination}, having a ${activity}, staying at ${accommodation} and with ${companion}`);

// const favoriteFilm ={
//     title:"Top Gun",
//     year:"1986",
//     genre:"action",
//     star:"Tom Gruise",
//     director:"Tony Scott"
// }
// const {title, year, g, s, d} = favoriteFilm;
// console.log(`${title} + ${year} + ${g} + ${s} + ${d}`);

// function selectItem(item){
//     let price = 0
//     switch(item){
//         case 'coffee':
//             price = 2;
//             break
//         case 'sandwiches':
//             price=5;
//             break
//         case "salad":
//             price=4;
//             break 
//         case "lemon cake":
//             price=3
//             break 
//         default:
//             return `${item} is not in stock.`;
//     }
//     return `You selected ${item}. That will be ${price}.`
// }
// console.log(selectItem("lemon cake"));

// const guess = 9;
// const answer = 9;
// const message = guess === answer ? "You got this!" 
// : answer < guess ? "Too big!"
// :"Too smaller!";
// console.log(message);

// const exerciseTimeMins = 50;
// const message = 
// exerciseTimeMins < 30 ? 'You need try try harder!' 
// : exerciseTimeMins < 60 ? "You're doing good!" 
// : "Excellent";
// console.log(message);

// const exerciseTimeMins = 20;
// const message = exerciseTimeMins < 30 ? `You're to try harder!` : `You're doing great!`;
// console.log(message);
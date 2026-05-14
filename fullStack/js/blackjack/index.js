let firstCard = 0;
let secondCard = 0;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("messageEl");
let cardsEl = document.getElementById("cards");
cardsEl.textContent = "Cards: " + firstCard +" "+ secondCard;
let sumEl = document.getElementById("sum");
sumEl.textContent = "Sum: " + sum;
let cards = [firstCard, secondCard];
let per = document.getElementById("per");
let storage = 200;
per.textContent = "Per: " + storage + "$";
let player = {
    name: "Per",
    chips: 200
}
let checkIn = false;

function startGame(){
    let a = 10;
    if (storage - a >= 0 && checkIn === false){
        storage -= a;
        per.textContent = player.name + ": $" + storage;
        checkIn = true;
        mainGame();
    }else {
        message = "You've an unfinished game.";
        messageEl.textContent = message;
    }
    console.log(per);
}
function mainGame(){
    if (sum === 0){
    firstCard = randomCard();
    secondCard = randomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    console.log("the cards[0] is " + cards[0]);
    cardsEl.textContent = "Cards: " + cards[0] +" "+ cards[1];
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20){
        message ="Do you want to draw a new card?";
    }else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
    }else if (sum>21){
        message ="You're out of the game!";
        isAlive = false;
    }else {
        message = "You've an unfinished game."
    }
    messageEl.textContent = message;
    per.textContent = player.name +": $"+ storage;
}
}
console.log(message);
//New Game/New Card
let thirdCard ;
console.log("The third card is "+ thirdCard);
let deposit = true;
function newCard(){
    if (sum === 21){
        message = "You've got Blackjack!";
    }else if (sum <= 21 && sum !== 0){
        thirdCard = randomCard();
        while (thirdCard === 0){
            thirdCard = randomCard();
        }
        cardsEl.innerText += " " + thirdCard;
        sum += thirdCard;
        sumEl.innerText = "Sum: "+sum;
    }else if (sum === 0){
        message = "Start your first game by clicking on 'Start Game' button.";
    }else{
        message = "You can't draw a new card! \n You're out of the game!";
    }
    messageEl.textContent = message;
}
function newGame(){
    if (sum === 0){
        message="Start your first game for your practice to be recorded."
    }else if (sum === 21){
        storage += 30;
        per.textContent = player.name + ": $" + storage;
        reset();
    }else if (sum > 21){
        reset();
    }else if (sum < 21){
        message ="You've an unfinished game."
    }
    messageEl.textContent = message;
}
function reset(){
    firstCard = 0;
    secondCard = 0;
    cardsEl.textContent = "Cards: " + firstCard +" "+ secondCard;
    sum =0;
    sumEl.textContent = "Sum: "+sum;
    thirdCard = 0;
    isAlive = true;
    message = "Want to paly a round?";
    checkIn = false;
    deposit = true;
}
function randomCard(){
    a = Math.floor(Math.random()*11 + 1);
    if (a === 1){
        return 11;
    }else if (a > 10 && a < 14){
        return 10;
    }else {
        return a;
    }
}
console.log("The card is " + randomCard());

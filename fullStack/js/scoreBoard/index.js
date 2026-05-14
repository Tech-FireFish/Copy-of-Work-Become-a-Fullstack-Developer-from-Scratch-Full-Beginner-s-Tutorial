let homeScore = document.getElementById("homeScore");
let homeCount = 0;
let guestScore = document.getElementById("guestScore");
let guestCount = 0;
let homeGame = 0;
let hGame = document.getElementById("homeGame");
let guestGame = 0;
let gGame = document.getElementById("guestGame");

//Home
function add1(){
    homeCount += 1;
    if(homeCount<10){
        homeScore.innerText = "0" + homeCount;
    }else{
        homeScore.innerText = homeCount;
    }
    higherScore();
}
function add2(){
    homeCount += 2;
    if(homeCount<10){
        homeScore.innerText = "0" + homeCount;
    }else{
        homeScore.innerText = homeCount;
    }
    higherScore();
}
function add3(){
    homeCount += 3;
    if(homeCount<10){
        homeScore.innerText = "0" + homeCount;
    }else{
        homeScore.innerText = homeCount;
    }
    higherScore();
}
// Guest
function addG1(){
    guestCount += 1;
    if(guestCount<10){
        guestScore.innerText = "0" + guestCount;
    }else{
        guestScore.innerText = guestCount;
    }
    higherScore();
}
function addG2(){
    guestCount += 2;
    if(guestCount<10){
        guestScore.innerText = "0" + guestCount;
    }else{
        guestScore.innerText = guestCount;
    }
    higherScore();
}
function addG3(){
    guestCount += 3;
    if(guestCount<10){
        guestScore.innerText = "0" + guestCount;
    }else{
        guestScore.innerText = guestCount;
    }
    higherScore();
}
//New game, highlight, few more counter, round against
function newGame(){
    if (homeCount > guestCount){
        homeGame += 1;
        document.getElementById("homeGame").innerText = homeGame;
        homeCount = 0;
        document.getElementById("homeScore").innerText = "0" + homeCount;
        scoreReset();
    }else if (guestCount > homeCount){
        guestGame += 1;
        document.getElementById("guestGame").innerText = guestGame;
        guestCount = 0;
        document.getElementById("guestScore").innerText = "0" + guestCount;
        scoreReset();
    }else if (homeCount == 0 && guestCount == 0){

    }else{
        homeGame += 1;
        document.getElementById("homeGame").innerText = homeGame;
        homeCount = 0;
        document.getElementById("homeScore").innerText = "0" + homeCount;
        guestGame += 1;
        document.getElementById("guestGame").innerText = guestGame;
        guestCount = 0;
        document.getElementById("guestScore").innerText = "0" + guestCount;
        scoreReset();
    }
    higherGame();
}
function resetGame(){
    homeGame = 0;
    document.getElementById("homeGame").innerText = homeGame;
    guestGame = 0;
    document.getElementById("guestGame").innerText = guestGame;
    scoreReset();
}
function scoreReset(){
    homeCount = 0;    
    document.getElementById("homeScore").innerText = "0" + homeCount;
    guestCount = 0;
    document.getElementById("guestScore").innerText = "0" + guestCount;
    homeScore.style.border = "2px solid rgb(177, 177, 177)";
    guestScore.style.border = "2px solid rgb(177, 177, 177)";
    hGame.style.color = "white";
    gGame.style.color = "white";
}
//Highlight
function higherScore(){
    if (homeCount > guestCount){
        homeScore.style.border = "4px solid gold";
        guestScore.style.border = "2px solid rgb(177, 177, 177)";
    }else if(guestCount > homeCount){
        guestScore.style.border = "4px solid gold";
        homeScore.style.border = "2px solid rgb(177, 177, 177)";
    }
}
function higherGame(){
    if (homeGame > guestGame){
        hGame.style.color = "gold";
        gGame.style.color = "white";
    }else if (guestGame > homeGame){
        gGame.style.color = "gold";
        hGame.style.color = "white";
    }
}
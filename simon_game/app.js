let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false; // game not started
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started == false){
        console.log("game started");
        started = true;         // game started

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash"); 
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    // console.log(randBtn);
    // gameSeq.push(randColor);
    // console.log(randIdx);

    gameFlash(randBtn);
}

function checkAns(){
    // console.log("curr level:",level);

    let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        console.log("same value");
    }else{
        h2.innerText = `Game Over! press any key to restart.`;
    }
}

function btnPress(){
    console.log("button was pressed");
    console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns();

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
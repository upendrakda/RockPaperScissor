//generate random no.
function random_num(){
let num = Math.floor(Math.random() * 3);
const option = ["Rock", "Paper", "Scissor"];
return option[num];
}

let clicked= 0;
let round = 1;
let comp_score=0;
let user_score=0;

//change selected image
function changeImage(element) {
     if (clicked) return;
    clicked = 1;

    document.getElementById("user").src = element.src;
    var user_choice = element.alt;
    var comp_choice = random_num();
    score(user_choice, comp_choice);
}

//logic 
function score(user_choice, comp_choice){
    let result="";
    
    if(user_choice===comp_choice){
        result="Draw!";
        round++;
    }
    else if((user_choice === "Rock" && comp_choice === "Scissor") ||
        (user_choice === "Paper" && comp_choice === "Rock") ||
        (user_choice === "Scissor" && comp_choice === "Paper")){
        result = "You Win!";
        user_score++;
        round++;
    } 
    else {
        result = "You Lose!";
        comp_score++;
        round++;
    }
    document.getElementById("score").innerHTML = `${user_score} - ${comp_score}`;
    document.getElementById("result").innerHTML = result;
    if(round>3){
        setTimeout(() => show_result(user_score, comp_score), 2000);
    }
    else{
        clicked=0;
        setTimeout(() => showRound(round), 2000);
    }
}

//display content and button function
window.onload = () => {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";

    attachStartButton();
};

function attachStartButton() {
    const btn = document.getElementById("play-btn");
    btn.onclick = () => showRound(round);
}

function showRound(num) {
    const overlay = document.getElementById("overlay");
    const content = document.getElementById("overlay-content");

    overlay.style.display = "flex";

    content.style.background = "none";
    content.style.padding = "0";

    content.innerHTML = `<h1 class="round-text">Round ${num}</h1>`;
    
    document.getElementById("round").innerHTML = `Round ${round}`;
    document.getElementById("result").innerHTML = "";

    setTimeout(() => {
        document.querySelector(".round-text").classList.add("show");
    }, 100);

    setTimeout(() => {
        overlay.style.display = "none";
    }, 1500);
}

function show_result(user_score, comp_score){
    const overlay = document.getElementById("overlay");
    const content = document.getElementById("overlay-content");

    overlay.style.display = "flex";

    content.style.background = "none";
    content.style.padding = "0";
    
    var result="";
    if(user_score===comp_score){
        result="Tie";
    }
    else if(user_score>comp_score){
        result="You Won!";
    }
    else{
        result="You Loose!";
    }
    
    content.innerHTML=`
        <h1>Game Over</h1>
        <p>${user_score} - ${comp_score}</p>
        <p>${result}</p>
        <button id="play-btn">Play Again</button>`;
        
}

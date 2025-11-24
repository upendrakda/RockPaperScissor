let num = Math.floor(Math.random() * 3);
const comp_choice = ["Rock", "Paper", "Scissor"];
document.getElementById("demo").innerHTML = comp_choice[num];

let clicked= 0;
let round = 1;
const maxRounds = 3;

function changeImage(element) {
     if (clicked) return;
    clicked = 1;

    document.getElementById("user").src = element.src;
    var user_choice = element.alt;
    document.getElementById("demo2").innerHTML = user_choice;

    let result="";
    let comp_score=0;
    let user_score=0;
    if(user_choice===comp_choice[num]){
        result="Draw!";
    }
    else if((user_choice === "Rock" && comp_choice[num] === "Scissor") ||
        (user_choice === "Paper" && comp_choice[num] === "Rock") ||
        (user_choice === "Scissor" && comp_choice[num] === "Paper")){
        result = "You Win!";
        user_score++;
    } 
    else {
        result = "You Lose!";
        comp_score++;
    }
    document.getElementById("score").innerHTML = `${user_score} - ${comp_score}`;
    document.getElementById("result").innerHTML = result;
}
// ---------------------------
const roundText = document.getElementById("round-text");

function showRound(roundNumber) {
    roundText.textContent = `Round ${roundNumber}`;
    roundText.classList.add("show");

    setTimeout(() => {
        roundText.classList.remove("show");
        showChoices(); // function to reveal Rock/Paper/Scissors
    }, 1500); // duration of animation
}
function showChoices() {
    document.querySelector(".choices").classList.add("show");
}
const playBtn = document.getElementById("play-btn");
const rulesScreen = document.getElementById("rules-screen");

playBtn.addEventListener("click", function() {
    rulesScreen.style.display = "none";  // hide rules overlay
    showRound(1);  // start first round
});

// -----------------------
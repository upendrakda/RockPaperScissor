let num = Math.floor(Math.random() * 3);
const comp_choice = ["Rock", "Paper", "Scissor"];
document.getElementById("demo").innerHTML = comp_choice[num];

function changeImage(element) {
    document.getElementById("user").src = element.src;
    var user_choice = element.alt;
    document.getElementById("demo2").innerHTML = user_choice;

    let result="";
    if(user_choice===comp_choice[num]){
        result="Draw!";
    }
    else if((user_choice === "Rock" && comp_choice === "Scissor") ||
        (user_choice === "Paper" && comp_choice === "Rock") ||
        (user_choice === "Scissor" && comp_choice === "Paper")){
        result = "You Win!";
    } 
    else {
        result = "You Lose!";
    }
    document.getElementById("demo3").innerHTML =
        `You: ${user_choice} <br> Computer: ${comp_choice} <br> Result: ${result}`;
}

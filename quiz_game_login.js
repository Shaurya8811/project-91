function addUser()
{
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location="index.html";
}

score=0;

function updateScore()
{
    score= score + 1;
    document.getElementById("score").innerHTML ="Score: " + score;
}
   
function saveScore()
{
    localStorage.setItem("score", score);
}

function nextPage() {
    window.location = "index.html";
}

function send(){
Number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1)*parseInt(number2);
}
question_number = "<h4>" + number1 + number2 +"</h4>";
input_box = "<br>Answer" <input type='text' id='input_check_box'>"";
check_button ="<br><br><button class="btn_btn-info onclick='check()'>check</button>"";
row = question_number + input_box + check_button ; 
document.getElementById("output").innerHTML =  row;

document.getElementById)("number1").value= "";
document.getElementById)("number2").value= "";

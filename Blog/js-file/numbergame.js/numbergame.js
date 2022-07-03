let number1 = document.getElementById("number1").innerHTML = Math.floor(Math.random() * 101);
let guesses = 10;
function myGame(){
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("digitYourNumber");
    if(MouseEvent){
    btn1.style.display = "none"
    btn2.style.display = "inline"
    }
 }
 function myTry(){

    let btn2 = document.getElementById("digitYourNumber");
    let btn1 = document.getElementById("btn1");
    let number2 = document.getElementById("number2");
    let number3 = document.getElementById("number1");
    let justice = document.getElementById("higher-lower");
    let justice2 = document.getElementById("oke");
    let gameOver = document.getElementById("Gameover");
    let userWin = document.getElementById("userWin");
    let yourGuesses = document.getElementById("your-guesses");
    let digitNumber= prompt("digit a number");
    if(MouseEvent){
        digitNumber;
    }
    if(digitNumber ==  number1){
        btn2.style.display = "none";
        justice.style.display = "block";
        number2.style.display = "block";
        yourGuesses.style.display = "none";
        number2.innerHTML = "You have choosed " + digitNumber;
        justice.innerHTML = "You are right";
        justice2.style.display = "none";   
        number3.style.display = "block";
        userWin.style.display = "block";
        userWin.innerHTML = "Congratulation you win!";
}
    if(digitNumber >  number1){
        justice2.style.display = "block";
        justice2.innerHTML = "Lower";
    }
    if(digitNumber <  number1){
        justice2.style.display = "block";
        justice2.innerHTML = "Higher";
    }
    if(guesses == 1){
        number3.style.display = "none";
        justice2.style.display = "none";
        btn2.style.display = "none";
        gameOver.style.display = "block";
        gameOver.innerHTML = "Game Over!";
        yourGuesses.style.display = "none";
    }
    if (digitNumber !=  number1){
        guesses -=1;
        yourGuesses.style.display = "block";
        yourGuesses.innerHTML = "Your remain Guesses " + guesses;
        justice.style.display = "block";
        number2.style.display = "block";
        number2.innerHTML = "You have choosed " + digitNumber;
        justice.innerHTML = "You are Wrong";    
    }
 }
 function restart(){
    let userWin = document.getElementById("userWin");
    let  yourGuesses = document.getElementById("your-guesses");
    let gameOver = document.getElementById("Gameover");
    let btn2 = document.getElementById("digitYourNumber");
    let btn1 = document.getElementById("btn1");
    let number2 = document.getElementById("number2");
    let number3 = document.getElementById("number1");
    let justice = document.getElementById("higher-lower");
    let justice2 = document.getElementById("oke");
    if(MouseEvent){
      number1= document.getElementById("number1").innerHTML = Math.floor(Math.random() * 101);
      guesses = 10;
      yourGuesses.style.display = "none";
      userWin.style.display = "none";
      gameOver.style.display = "none";
      btn2.style.display = "none";
      btn1.style.display = "inline";
      justice.style.display = "none";
justice2.style.display = "none";
number2.style.display = "none";
number3.style.display = "none";
    }
 }
// Declare variables below to save the different divs of your story.

let opening = document.querySelector(".story-opening");
let nameDisplay = document.querySelector(".player-name");
let input = document.querySelector(".player-name-input");


//name
let enterButton = document.querySelector(".enter-button");
enterButton.addEventListener("click", function() {
    let playerName = input.value.trim();
    if (playerName !== "") {
        nameDisplay.textContent = playerName;
        nameDisplay.style.display = "flex";
        nameDisplay.style.justifyContent = "flex-end";
    }
});


let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionThreeScreen = document.querySelector(".option-two-end");

//first choice - go left or go right
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");

//second choice - explore cabin or not
let secondOptionOne = document.querySelector(".second-option-one");
let secondOptionTwo = document.querySelector(".second-option-two");

//third choice
let thirdOptionOne = document.querySelector(".third-option-one");
let thirdOptionTwo = document.querySelector(".third-option-two");

//fourth choice
let fourthOptionOne = document.querySelector(".fourth-option-one");
let fourtOptionTwo = document.querySelector(".fourth-option-two");


let fifthOptionOne = document.querySelector(".fifth-option-one");
let fifthOptionTwo = document.querySelector(".fifth-option-two")

let optionOneEnd = document.querySelector(".option-one-end");
let optionOneBad = document.querySelector(".option-one-bad");
let optionOneGood = document.querySelector(".option-one-good");

let optionTwoGood = document.querySelector(".option-two-good");
let optionTwoBad = document.querySelector(".option-two-bad");



//first choice
optionOne.addEventListener("click", function(){
 opening.style.display = "none";
 optionOneScreen.style.display = "block";
});

optionTwo.addEventListener("click", function(){
 opening.style.display = "none";
 optionTwoScreen.style.display = "block";
});

//second choice
secondOptionOne.addEventListener("click", function(){
 optionOneScreen.style.display = "none";
 optionOneEnd.style.display = "block";
});

secondOptionTwo.addEventListener("click", function(){
optionOneScreen.style.display="none";
optionTwoScreen.style.display="block";
})

//thirdchoice
thirdOptionOne.addEventListener("click", function(){
 optionTwoScreen.style.display = "none";
 optionThreeScreen.style.display = "block";
});

thirdOptionTwo.addEventListener("click", function(){
 optionTwoScreen.style.display = "none";
 optionOneScreen.style.display="block";
});

//fourth choice
fourthOptionOne.addEventListener("click", function(){
 optionThreeScreen.style.display = "none";
 optionTwoGood.style.display="block";
});

fourtOptionTwo.addEventListener("click", function(){
 optionThreeScreen.style.display="none";
 optionTwoBad.style.display="block";
});


fifthOptionOne.addEventListener("click", function(){
    optionOneEnd.style.display="none";
    optionOneBad.style.display="block";
});

fifthOptionTwo.addEventListener("click", function(){
    optionOneEnd.style.display="none";
    optionOneGood.style.display="block";
});
// Declare variables below to save the different divs of your story.

let opening = document.querySelector(".story-opening");


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

let optionTwoGood = document.querySelector(".option-two-good");
let fifthOptionOne = document.querySelector(".fifth-option-one");

let optionOneEnd = document.querySelector(".option-one-end");
let optionOneBad = document.querySelector(".option-one-bad");

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

//
optionOne.addEventListener("click", function(){
 opening.style.display = "none";
 optionOneScreen.style.display = "block";
});

secondOptionOne.addEventListener("click", function(){
 optionOneScreen.style.display = "none";
 optionOneEnd.style.display = "block";
});

optionTwo.addEventListener("click", function(){
 opening.style.display = "none";
 optionTwoScreen.style.display = "block";
});

thirdOptionOne.addEventListener("click", function(){
 optionTwoScreen.style.display = "none";
 optionThreeScreen.style.display = "block";
});

fourthOptionOne.addEventListener("click", function(){
 optionThreeScreen.style.display = "none";
 optionTwoGood.style.display="block";
});

fifthOptionOne.addEventListener("click", function(){
    optionOneEnd.style.display="none";
    optionOneBad.style.display="block";
});

secondOptionTwo.addEventListener("click", function(){
    optionOneScreen.style.display="none";
    optionTwoScreen.style.display="block";
});
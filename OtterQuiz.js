var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var submit = document.getElementById("Submit");
var score = document.getElementById("Score");
var result= 0;

function checkq1() {
	if (q1.value == "No"){
		score.innerHTML = "CORRECT";
	}

	else {
		score.innerHTML = "WRONG";
	}
}
submit.addEventListener("click", checkq1, calculate);

function checkq2() {
	if (q2.value == "Webbed feet and powerful tails"){
		score.innerHTML = "CORRECT";
	}

	else {
		score.innerHTML = "WRONG";
	}
}
submit.addEventListener("click", checkq2, calculate);

function checkq3() {
	if (q3.value == "Couch"){
		score.innerHTML = "CORRECT";
	}

	else {
		score.innerHTML = "WRONG";
	}
}
submit.addEventListener("click", checkq3, calculate);

function checkq4() {
	if (q4.value == "Pup"){
		score.innerHTML = "CORRECT";
	}

	else {
		score.innerHTML = "WRONG";
	}
}
submit.addEventListener("click", checkq4, calculate);

function checkq5() {
	if (q5.value == "Weasel"){
		score.innerHTML = "CORRECT";
	}

	else {
		score.innerHTML = "WRONG";
	}
}
submit.addEventListener("click", checkq5, calculate);

function checkq6() {
	if (q6.value == "13"){
		score.innerHTML = "CORRECT";
	}

	else {
		score.innerHTML = "WRONG";
	}
}
submit.addEventListener("click", checkq6, calculate);

function checkq7() {
	if (q7.value == "Fish"){
		score.innerHTML = "CORRECT";
	}

	else {
		score.innerHTML = "WRONG";
	}
}
submit.addEventListener("click", checkq7, calculate);

function checkq8() {
	if (q8.value == "Kelp"){
		score.innerHTML = "CORRECT";
	}

	else {
		score.innerHTML = "WRONG";
	}
}
submit.addEventListener("click", checkq8, calculate);

function checkq9() {
	if (q9.value == "Playful"){
		score.innerHTML = "CORRECT";
	}

	else {
		score.innerHTML = "WRONG";
	}
}
submit.addEventListener("click", checkq9, calculate);

function checkq10() {
	if (q10.value == "Pacific"){
		score.innerHTML = "CORRECT";
	}

	else {
		score.innerHTML = "WRONG";
	}
}
submit.addEventListener("click", checkq10, calculate);



function calculate(){
	if(q1.value == "No") {
		result = result + 1;
	}
	if(q2.value == "Webbed feet and powerful tails") {
		result = result + 1;
	}
	if(q3.value == "Couch") {
		result = result + 1;
	}
	if(q4.value == "Pup") {
		result = result + 1;
	}
	if(q5.value == "Weasel") {
		result = result + 1;
	}
	if(q6.value == "13") {
		result = result + 1;
	}
	if(q7.value == "Fish") {
		result = result + 1;
	}
	if(q8.value == "Kelp") {
		result = result + 1;
	}
	if(q9.value == "Playful") {
		result = result + 1;
	}
	if(q10.value == "Pacific") {
		result = result + 1;
	}
}















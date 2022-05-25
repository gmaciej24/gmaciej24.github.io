var enteredPass;
var a1 = document.getElementById("madlib1");
var a2 = document.getElementById("madlib2");
var a3 = document.getElementById("madlib3"); 
var a4 = document.getElementById("madlib4");
var a5 = document.getElementById("madlib5");
var a6 = document.getElementById("madlib6");
var a7 = document.getElementById("madlib7");
var a8 = document.getElementById("madlib8");
var a9 = document.getElementById("madlib9");
var a10 = document.getElementById("madlib10");
var a11 = document.getElementById("madlib11");
var a12 = document.getElementById("madlib12");
var a13 = document.getElementById("madlib13");
var a14 = document.getElementById("madlib14");


function checkPass(){
	enteredPass = document.getElementById("password").value;
if (document.getElementById("password").value == "password123"){
	document.getElementById("access").innerHTML = "ACCESS GRANTED";
	document.getElementById("access").style.color = "green"
}

else { 
	document.getElementById("access").innerHTML = "The Password " + enteredPass + " was the wrong Password";
	document.getElementById("access").style.color = "red"
	}

	document.getElementById("submitbutton").addEventListener("click", checkPass)

function checkAnswers(){
if (a1.value == "stormy"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a1.innerHTML = "WRONG"
	}

if (a2.value == "delicious"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a2.innerHTML = "WRONG"
}

if (a3.value == "chicken"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a3.innerHTML = "WRONG"
}

if (a4.value == "kitchen"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a4.innerHTML = "WRONG"
}

if (a5.value == "ran"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a5.innerHTML = "WRONG"
}

if (a6.value == "with"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a6.innerHTML = "WRONG"
}

if (a7.value == "sister"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a7.innerHTML = "WRONG"
}

if (a8.value == "glass"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a8.innerHTML = "WRONG"
}

if (a9.value == "water"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a9.innerHTML = "WRONG"
}

if (a10.value == "dining"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a10.innerHTML = "WRONG"
}

if (a11.value == "eyes"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a11.innerHTML = "WRONG"
}

if (a12.value == "frogs"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a12.innerHTML = "WRONG"
}

if (a13.value == "jumping"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a13.innerHTML = "WRONG"
}

if (a14.value == "table"){
	document.getElementById("result").innerHTML = "CORRECT"
}

else{
	a14.innerHTML = "WRONG"
}
}
document.getElementById("subbutton").addEventListener("click", checkAnswers)
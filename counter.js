var count = 0;

function minus() {
	count = count -1;
	document.getElementById("total").innerHTML=count;
	
	if (count <= 10){
		document.getElementById("total").style.color "black";
	}
	if (count == 68) {
		document.getElementById("total").innerHTML = "nice";
	}
}

function plus() {
	count = count +1;
	document.getElementById("total").innerHTML=count;
	
	if (count > 10){
		document.getElementById("total").style.color "RED";
	}
	if (count == 68) {
		document.getElementById("total").innerHTML = "nice";
	}
}

document.getElementById("minus").addEventListener("click", minus);
document.getElementById("plus").addEventListener("click", plus);

var count2 = 0;

function multiply(){  
	count = count *10;
	document.getElementById("mathtotal").innerHTML=count2;
}

function divide(){  
	count = count /10;
	document.getElementById("mathtotal").innerHTML=count2;
}

document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);

var count3 = 0;

function divide2(){
	count = count /2;
	document.getElementById("dividiontotal").innerHTML=count3;
}

function multiply2(){  
	count = count *2;
	document.getElementById("dividiontotal").innerHTML=count3;
}

document.getElementById("multiply2").addEventListener("click", multiply2);
document.getElementById("divide2").addEventListener("click", divide2);

var count4 = 0;

function minus3(){
	count = count -3;
	document.getElementById("minustotal").innerHTML=count4;
}

function plus3(){  
	count = count +3;
	document.getElementById("minustotal").innerHTML=count4;
}

document.getElementById("minus3").addEventListener("click", minus3);
document.getElementById("plus3").addEventListener("click", plus3);

var count5 = 0;

function plus100(){
	count = count +100;
	document.getElementById("plustotal").innerHTML=count5;
}

function minus100(){  
	count = count -100;
	document.getElementById("plustotal").innerHTML=count5;
}

document.getElementById("plus100").addEventListener("click", plus100);
document.getElementById("minus100").addEventListener("click", minus100);






































var b1 = document.getElementById("lake1");
var b2 = document.getElementById("lake2");
var b3 = document.getElementById("squirrel1");
var b4 = document.getElementById("clouds");
var b5 = document.getElementById("sunset");
var b6 = document.getElementById("squirrel2");
var b7 = document.getElementById("squirrel3");
var b8 = document.getElementById("squirrel4");
var b9 = document.getElementById("squirrel5");
var b10 = document.getElementById("lakehouse");
var image1 = documant.getElementById("pic1");
var image2 = documant.getElementById("pic2");
var image3 = documant.getElementById("pic3");
var image4 = documant.getElementById("pic4");
var image5 = documant.getElementById("pic5");
var image6 = documant.getElementById("pic6");
var image7 = documant.getElementById("pic7");
var image8 = documant.getElementById("pic8");
var image9 = documant.getElementById("pic9");
var image10 = documant.getElementById("pic10");
function changeLake1(){
	image1.src="images/IMG_0690.jpg";
}

function changeLake2(){
	image2.src="images/IMG_0694.jpg";
}

function changeSquirrel1(){
	image3.src="images/IMG_2008.PNG";
}

function changeClouds(){
	image4.src="images/IMG_4961.jpg";
}

function changeSunset(){
	image5.src="images/IMG_1717.jpg";
}

function changeSquirrel2(){
	image6.src="images/IMG_2941.jpg";
}

function changeSquirrel3(){
	image7.src="images/IMG_2203.PNG";
}

function changeSquirrel4(){
	image8.src="images/IMG_2211.PNG";
}

function changeSquirrel5(){
	image9.src="images/IMG_0901.JPG";
}


function changeLakeHouse(){
	image10.src="images/ECBD0C45-B46F-4B7B-872A-6BBBCE9A4380.jpg";
}

b1.addEventListener("click", changeLake1)
b2.addEventListener("click", changeLake2)
b3.addEventListener("click", changeSquirrel1)
b4.addEventListener("click", changeClouds)
b5.addEventListener("click", changeSunset)
b6.addEventListener("click", changeSquirrel2)
b7.addEventListener("click", changeSquirrel3)
b8.addEventListener("click", changeSquirrel4)
b9.addEventListener("click", changeSquirrel5)
b10.addEventListener("click", changeLakeHouse)


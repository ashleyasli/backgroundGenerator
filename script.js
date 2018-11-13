var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var random = document.querySelector(".random");
var body = document.getElementById("gradient");

function setColor() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ", " 
	+ color3.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomgenerator(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function get_number(){
	color1.value = randomgenerator();
	color2.value = randomgenerator();
	color3.value = randomgenerator();
	setColor();
}

/*color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);*/
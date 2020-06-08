var uiCSS = document.querySelector("h3"),
    uiColorPicker1 = document.querySelector(".color1"),
    uiColorPicker2 = document.querySelector(".color2"),
    uiBody = document.getElementById('gradient');

function setColor(){
	uiBody.style.background = `linear-gradient(to right, ${uiColorPicker1.value}, ${uiColorPicker2.value})`;
	uiCSS.textContent = `${uiBody.style.background}`;
}

uiColorPicker1.addEventListener('input',setColor);

uiColorPicker2.addEventListener('input', setColor);
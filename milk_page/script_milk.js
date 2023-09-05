window.addEventListener("resize", AutoScale);

AutoScale();

function AutoScale()
{
    let width = window.innerWidth; //Ширина окна
    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

    if(width > 1280)
    {
   	 ChangeScale("big");
    }
    else if(width <= 1280 && width > 720)
    {
   	 ChangeScale("normal");
    }
    else if(width < 720)
    {
   	 ChangeScale("small");
    }
}

var headingElement = document.getElementById('main');

headingElement.onmouseover = function(event) {
	let target = event.target;
	target.style.color = '#fab957';
};  

headingElement.onmouseout = function(event) {
	let target = event.target;
	target.style.color = '#ed3f09';
}; 

var tableEl = document.getElementById('table');

tableEl.onmouseover = function(event) {
	let target = event.target;
	target.style.color = '#fab957';
};  

tableEl.onmouseout = function(event) {
	let target = event.target;
	target.style.color = 'red';
}; 
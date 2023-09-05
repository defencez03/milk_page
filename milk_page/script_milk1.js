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
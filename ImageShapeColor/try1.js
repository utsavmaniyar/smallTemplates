// JavaScript Document
var apply = document.getElementById('apply');
var d = document.getElementById('color');
var r = document.getElementById('roundBtn');
var b = document.getElementById('boxBtn');


function change(e){
	var x = e.clientX;
	var y = e.clientY;
	x=x-80;
	y=y-80;
	var x1= 10-x;
	var y1 = 0-y;
	apply.style.display = "inline";
	apply.style.left = x+'px ';
	apply.style.top = y+'px';
	apply.style.backgroundPosition = x1+'px '+y1+'px';
	
}

function roundRun(){
	apply.className+=" round";
	apply.classList.remove("box");
}
function boxRun(){
	apply.className+=" box";
	apply.classList.remove("round");
	
}

r.onclick = roundRun;
b.onclick = boxRun;

function done(){
}
function clean(){
d.onmousemove = change;
}
d.onmouseover =done;
d.onmouseout = clean;
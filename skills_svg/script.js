/*// JavaScript Document
var a = document.getElementById('skill');
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var s4 = document.getElementById('s4');
var s5 = document.getElementById('s5');

s1.onmouseover= photoshop;
s2.onmouseover= javascript;
s3.onmouseover= bootstrap;
s4.onmouseover= css;
s5.onmouseover= html;


function photoshop(){
a.innerHTML= "Photoshop <br>55%";
}function javascript(){
a.innerHTML= "Javascript <br>65%";
}function bootstrap(){
a.innerHTML= "Bootstrap <br>70%";
}function css(){
a.innerHTML= "CSS <br>80%";
}function html(){
a.innerHTML= "HTML <br>85%";
}*/
var skillText = document.getElementById('skill');
var pathClass = document.getElementsByClassName('try');
//console.log(test);
for (var i = 0; i < pathClass.length; i++) {
   pathClass[i].addEventListener("mousemove", (function(i) {
      return function() {
         //console.log('You clicked element #' + i);
		 if(i===0){ skillText.innerHTML= "Photoshop <br>55%";
		 }else if(i===1){ skillText.innerHTML= "Javascript <br>65%";
		 }else if(i===2){ skillText.innerHTML= "Bootstrap <br>70%";
		 }else if(i===3){ skillText.innerHTML= "CSS <br>80%";
		 }else if(i===4){ skillText.innerHTML= "HTML <br>85%";
		 }
      }
   })(i));
}
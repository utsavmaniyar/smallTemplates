
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

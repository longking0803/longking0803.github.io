// JavaScript Document
var Page =1;
			var dots = document.getElementsByClassName("litk");
			function Tonextpage(){
				var next=Page+1;
				document.getElementById("anchor").href = "#" + next;
			}
			function Tolastpage(){
				var last=Page-1;
				document.getElementById("anchor1").href = "#" + last;
			}
			function scrollFunction(){
				var elmnt = document.getElementById("container");
				var z = (elmnt.scrollHeight)*0.743;
				var y = elmnt.scrollTop;
				var avr = z/dots.length;
				Page = parseInt((y/avr + 1));
				changeDotColor(Page);
			}
			function changeDotColor(n){
				var i;
				 for (i = 0; i < dots.length; i++) {
					 dots[i].className = dots[i].className.replace(" redword", "");
				 }
				if((n-1)>=0) dots[n-1].classList.add('redword');
			}

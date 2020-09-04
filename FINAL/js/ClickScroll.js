// JavaScript Document
var Page =1;
			var dots = document.getElementsByClassName("bar");
			function scrollFunction(){
				var elmnt = document.getElementById("container");
				var z = elmnt.scrollHeight;
				var y = elmnt.scrollTop;
				var avr = z/dots.length;
				Page = parseInt((y/avr + 1));
				changeDotColor(Page);
			}
			function changeDotColor(n){
				var i;
				 for (i = 0; i < dots.length; i++) {
					 dots[i].className = dots[i].className.replace(" button-clicked", "");
				 }
				if((n-1)>=0) dots[n-1].classList.add('button-clicked');
			}

$(document).ready(function() {
	$('#moveleft').click(function() {
		$('#formbox').animate({
		'marginLeft' : "-=50%" //moves left
		});
		$('.close_signin').animate({
		'marginLeft' : "-=50%" //moves left
		});
		$("#formbox2").css('zIndex', 1);
		$("#formbox2").css('opacity', 1);
	});
	$('#moveright').click(function() {
		$('#formbox').animate({
		'marginLeft' : "+=50%" //moves right
		});
		$('.close_signin').animate({
		'marginLeft' : "+=50%" //moves left
		});
		$("#formbox2").css('opacity', 0);
		$("#formbox2").css('zIndex', -1);
	});
});
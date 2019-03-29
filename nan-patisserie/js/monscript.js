var service = document.getElementById('box-service'),
title = document.getElementById('header-service'),
div1 = document.getElementById('div1-service'),
div2 = document.getElementById('div2-service'),
div3 = document.getElementById('div3-service');

var change = function(){
	title.classList.add('h2-service');
	div1.classList.add('div1');
	div2.classList.add('div2');
	div3.classList.add('div3');
	
}

var initial = function(){
	title.classList.remove('h2-service');
	div1.classList.remove('div1');
	div2.classList.remove('div2');
	div3.classList.remove('div3');
}

service.addEventListener("mouseover", change);
service.addEventListener("mouseout", initial);
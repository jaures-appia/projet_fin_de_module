var chocolat = document.getElementById('chocolat');
var fraise = document.getElementById('fraise');
var myrtille = document.getElementById('myrtille');
var menthe = document.getElementById('menthe');
var vanille = document.getElementById('vanille');
var mariage = document.getElementById('mariage');
var menu = document.getElementById('menu');
var footer = document.getElementById('footer');

// ***** CHOCOLAT *****

var changeColor1 = function(){

	menu.classList.add('navbar-chocolat');
	footer.classList.add('chocolat');

}
var removeColor1 = function(){

	menu.classList.remove('navbar-chocolat');
	footer.classList.remove('chocolat');
}

// ***** FRAISE *****

var changeColor2 = function(){

	menu.classList.add('navbar-fraise');
	footer.classList.add('fraise');

}
var removeColor2 = function(){

	menu.classList.remove('navbar-fraise');
	footer.classList.remove('fraise');
}

// ***** MYRTILLE *****

var changeColor3 = function(){

	menu.classList.add('navbar-myrtille');
	footer.classList.add('myrtille');

}
var removeColor3 = function(){

	menu.classList.remove('navbar-myrtille');
	footer.classList.remove('myrtille');
}

// ***** MENTHE *****

var changeColor4 = function(){

	menu.classList.add('navbar-menthe');
	footer.classList.add('menthe');

}
var removeColor4 = function(){

	menu.classList.remove('navbar-menthe');
	footer.classList.remove('menthe');
}

// ***** VANILLE *****

var changeColor5 = function(){

	menu.classList.add('navbar-vanille');
	footer.classList.add('vanille');

}
var removeColor5 = function(){

	menu.classList.remove('navbar-vanille');
	footer.classList.remove('vanille');
}

// ***** MARIAGE *****

var changeColor6 = function(){

	menu.classList.add('navbar-mariage');
	footer.classList.add('mariage');

}
var removeColor6 = function(){

	menu.classList.remove('navbar-mariage');
	footer.classList.remove('mariage');
}

// ***** AJOUT DES CLASSES *****

chocolat.addEventListener('mouseover',changeColor1 );
fraise.addEventListener('mouseover',changeColor2 );
myrtille.addEventListener('mouseover',changeColor3 );
menthe.addEventListener('mouseover',changeColor4 );
vanille.addEventListener('mouseover',changeColor5 );
mariage.addEventListener('mouseover',changeColor6 );

// ***** RETRAIT DES CLASSES *****

chocolat.addEventListener('mouseout',removeColor1 );
fraise.addEventListener('mouseout',removeColor2 );
myrtille.addEventListener('mouseout',removeColor3 );
menthe.addEventListener('mouseout',removeColor4 );
vanille.addEventListener('mouseout',removeColor5 );
mariage.addEventListener('mouseout',removeColor6 );

/**tableau contenant les images + textes des slides*/
const slides = [																											
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{	
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const $leftArrow =  document.querySelector(".arrow_left");																	
const $rightArrow =  document.querySelector(".arrow_right");
const $bannerImg = document.querySelector(".banner-img");
const $SliderDots = document.querySelector(".dots");
const $textImg = document.querySelector(".text-img")

let currentSlide = 0;
let dots = [];

/**fonction permettant de générer les points sous forme de boutons*/
for (let i=0; i < slides.length; i++){															 
	let dot = document.createElement("button");
	$SliderDots.appendChild(dot);
	dot.classList.add('dot');
	dots.push(dot);
}

dots[0].classList.add ('dot_selected');

$leftArrow.addEventListener('click', prevImage)
$rightArrow.addEventListener('click', nextImage)


function changeImage(index){														
	$bannerImg.src = "./assets/images/slideshow/" + slides[index].image;		
	$textImg.innerHTML = slides[index].tagLine;										
	dots[index].classList.add("dot_selected");										
	currentSlide = index; 		
}

/**
 * Cette fonction permet de passer à l'image précédente
 */
function prevImage(){
	dots[currentSlide].classList.remove("dot_selected")

	if	(currentSlide === 0){	
		changeImage(slides.length - 1)
	}

	else{ 
		changeImage(currentSlide - 1)
	}
}

/**
 * Cette fonction permet de passer à l'image suivante
 */
function nextImage(){
	dots[currentSlide].classList.remove("dot_selected")
	
	if (currentSlide === slides.length - 1) {			
		changeImage(0)										
	}
	
	else { 	

		changeImage(currentSlide + 1)
	}
}
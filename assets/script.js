//tableau contenant les images + textes des slides
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

//fonction permettant de générer les points sous forme de boutons
for (let i=0; i < slides.length; i++){															 
	let dot = document.createElement("button");
	$SliderDots.appendChild(dot);
	dot.classList.add('dot');
	dots.push(dot);
}

dots[0].classList.add ('dot_selected');

$leftArrow.addEventListener('click', prevImage)
$rightArrow.addEventListener('click', nextImage)
/**
 * Cette fonction permet de passer à l'image précédente
 */
function prevImage(){
	dots[currentSlide].classList.remove("dot_selected")

	if	(currentSlide === 0){																	//on check si on est sur la 1ère slide du tableau
		$bannerImg.src = "./assets/images/slideshow/" + slides[slides.length - 1].image;		//dans ce cas on passe à la dernière slide lors du click sur la flèche
		$textImg.innerHTML = slides[slides.length - 1].tagLine;										
		dots[dots.length - 1].classList.add("dot_selected");										
		currentSlide = slides.length - 1; 		
	}

	else{ 
		$bannerImg.src= "./assets/images/slideshow/" + slides[currentSlide - 1].image; 			//si on n'est pas sur la 1ère slide, on passe simplement à la précédente
		$textImg.innerHTML = slides [currentSlide -1 ].tagLine;
		dots[currentSlide - 1].classList.add("dot_selected")
		currentSlide = currentSlide -1;
	}
}

function nextImage(){
	dots[currentSlide].classList.remove("dot_selected")
	
	if (currentSlide === slides.length -1) {													//on check si on est sur la dernière slide
		$bannerImg.src = "./assets/images/slideshow/" + slides[0].image;						//dans ce cas on passe à la première slide lors du click sur la flèche
		$textImg.innerHTML = slides[0].tagLine;
		dots[0].classList.add("dot_selected");
		currentSlide = 0;	
	}
	
	else { 	
		$bannerImg.src= "./assets/images/slideshow/" + slides[currentSlide+1].image; 			//sinon on passe simplement à la suivante
		$textImg.innerHTML = slides[currentSlide + 1 ].tagLine;
		dots[currentSlide + 1].classList.add("dot_selected")
		currentSlide = currentSlide + 1;
	}
}
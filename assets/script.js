// Sélecteurs des flèches droite et gauche
const arrowleft = document.querySelector('.arrow_left');
const arrowright = document.querySelector('.arrow_right');

// Sélecteurs de l'image et du texte de la bannière
const imgBanner = document.querySelector('.banner-img');
const pBanner = document.querySelector('#banner p');

// Sélecteur pour les cercles (dot)
const dotBanner = document.querySelector('.dot');

// Déclaration de la variable "index"
// l'index du premier élément du tableau est 0, le 2ème=1, le 3ème=2...)
let index = 0;

// Tableau [] des images et taglines de la bannière
const slides = [
	// partie entre {} = un élément
	{
		image: 'slide1.jpg',
		tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>'
	},
	{
		image: 'slide2.jpg',
		tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
	},
	{
		image: 'slide3.jpg',
		tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
	},
	{
		image: 'slide4.png',
		tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>'
	}
]

// Variable qui permet de changer les éléments HTML du carrousel (image et tagline)
const changeValueElement = () => {
	// modification du HTML selon l'index du tableau
	imgBanner.src = `./assets/images/slideshow/${slides[index].image}`;
	// $ > appelle la variable et le . permet d'appeler un attribut (image) de la variable
	pBanner.innerHTML = slides[index].tagLine;
};

// addEventListener = 
arrowleft.addEventListener(`click`, () => {
	index--;
	// Revenir au début du tableau
	// if (si) : () condition et {} action
	if (index < 0 ) {
		// si index inférieur à 0
		index = slides.length - 1; 
		// .length définit (ou renvoie) le nombre d'éléments dans le tableau "slides"
		// -1 = revenir de 1 en arrière
	}
	changeValueElement ();
	console.log (index);
});


arrowright.addEventListener(`click`, () => {
	index++;
	// Avancer jusqu'à la fin du tableau
	if (index >= slides.length) {
		index = 0;
		// Si (if) l'index est supérieur ou égal au nombre total d'élément
		// l'index reviens à 0
	}
	changeValueElement ();
	console.log (index);
});

// console.log (index) : sert à vérifier qu'on se trouve sur le bon index
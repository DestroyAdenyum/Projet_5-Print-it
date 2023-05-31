// Sélecteurs des flèches droite et gauche
const arrowleft = document.querySelector('.arrow_left');
const arrowright = document.querySelector('.arrow_right');
// "const" est une variable qui ne peut pas être réaffectée

// Sélecteurs de l'image et du texte de la bannière
const imgBanner = document.querySelector('.banner-img');
const pBanner = document.querySelector('#banner p');

// Sélecteur du conteneur des "pastilles" (dot) de navigation de la bannière
const dotContainerBanner = document.querySelector('.dots');

// Déclaration de la variable "index"
// l'index du premier élément du tableau est 0, le 2ème=1, le 3ème=2...)
let index = 0;
// "let" est une variable qui peut être réaffectée

// Tableau/Array [] des images et taglines de la bannière
const slides = [
	// partie entre {} = un élément ou objet du tableau
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
	/* Ceci est une chaîne de caractères utilisée pour construire l'URL de la nouvelle image à afficher. 
	Il utilise des interpolations de chaînes (notées avec les backticks ) 
	et la syntaxe `${expression}` pour inclure dynamiquement des valeurs dans la chaîne. */
	// slides[index].image -> expression qui accède à la propriété image correspondant à l'index actuel
	pBanner.innerHTML = slides[index].tagLine;
};

/* fonction chargée de changer la classe CSS 
d'une liste d'éléments avec le nom de classe 'dot' */
const changeBulletPointCss = () => {
	/* On sélectionne tous les éléments avec le nom de classe 'dot' 
	à l'aide de la méthode querySelectorAll et les affecte à la 
	variable dotsElement. */
	const dotsElement = document.querySelectorAll('.dot');
	/* On itère sur chaque élément de la liste de noeuds dotsElement à l'aide 
	de la méthode forEach, en fournissant l'élément actuel en tant que 
	dotItem et son itérateur en tant que i. */
	dotsElement.forEach((dotItem, i) => {
		// on enlève toujours en premier (lecture de haut en bas)
		dotItem.classList.remove('dot_selected');
		// et si l'itérateur ici est strictement égal à la variable index,
		if (i === index) {
			// alors on ajoute la classe .dot_selected
			dotItem.classList.add('dot_selected');
		}
	}); 
}


/* On crée une boucle "for" qui crée dynamiquement les points de navigation
en fonction du nombre de diapositives */
for (let i = 0; i < slides.length; i++) {
	// On crée l'élément span qui sera un dot
	const dotElement = document.createElement('span');
	// on lui donne la classe .dot
	dotElement.classList.add('dot');
	// si l'index est strictement égal à l'itérateur
	if (index === i) {
		// on crée la classe .dot_selected
		dotElement.classList.add('dot_selected');
	}

	// On crée l'évènement d'écoute au click
	dotElement.addEventListener('click', () => {
		// qui met à jour la variable index
		index = i;
		// qui met à jour le contenu de la bannière
		changeValueElement();
		// et met à jour la classe css
		changeBulletPointCss();
	});

	/* l'élément dot est ajouté au dotContainerBanner qui est le conteneur 
	où les points seront affichés. */
	dotContainerBanner.appendChild(dotElement);
}


// Ecouteur evènement au clique sur la flèche gauche
arrowleft.addEventListener(`click`, () => {
	// lorsque l'on clique l'index est décrémenter (--)
	index--;
	// if (si) : () condition et {} action
	// si l'index est inférieur à 0
	if (index < 0 ) {
		// il est défini sur le dernier index de slides
		index = slides.length - 1; 
		// .length définit (ou renvoie) le nombre d'éléments dans le tableau "slides"
		// -1 = l'index revient de 1 en arrière
	}
	// après la mise à jour de l'index :
	// On invoque le changeValue
	changeValueElement();
	// ainsi que le changeBulletPointCss
	changeBulletPointCss();
	console.log(index);
	// console.log (index) : sert à vérifier qu'on se trouve sur le bon index
});

// Ecouteur évènement au clique sur la flèche droite
arrowright.addEventListener(`click`, () => {
	// Lorsque l'on clique, l'index est incrémenté (++)
	index++;
	// Si l'index est supérieur ou égal au nombre total d'éléments de slides
	if (index >= slides.length) {
		// l'index reviens à 0
		index = 0;
	}
	// après la mise à jour de l'index :
	changeValueElement();
	changeBulletPointCss();
	console.log(index);
});

//PARTIE 2 
// exercise 1
//Corrigez le code suivant (Erreur de syntaxe), pour calculer le carré.
//  $a*$a deja $  on peut pas coller au variable en js
// la parametre est b et not a
// je appliquer la syntax de carre  et je return

function carre(b) {
	return b**2;
}

// Afficher la sortie
console.log(carre(2));
console.log(carre(4));



// exercise 2
//Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE.
//je fais un if statement  pour valider  si la condition est true pour  (a+b< 100 ) donc la return sera  true 
//le autre alternative sera automatiquement false 

function check(a, b) {
	// Écrivez votre code ici
	if (a+b < 100) {
	    return 'true' ;
	}else 
	return 'false';
}

// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));


// exercise 3
//une fonction qui convertit les heures en secondes
function heureSeconde(heure) {
	// je pris la parametre heure qui etait envoyer par function heure second
	// pour converti en second il ya deux etape 
	// la 1ere en minute 
	// la 2eme converti les minute en second 
	// la mielleur est le multiply par 60*60 =3600 
	//je return la reponse en second
	return heure*3600;
}

// Afficher la sortie
console.log(heureSeconde(1));
console.log(heureSeconde(5));



// exercise 4
//une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon retournez FALSE.
function checkNbr(n) {
	// la function resemble a check(a,b) 
	//je veux faire dans un autre facon
	// je return tout suit la condition demande ctd(a<=0) pour avoir un boolean T ou F
	// je fais ca parceque pour return quelque chose de function il faut la condition soit true 
	//et la return va evaluer la condition mise si true ou false 
	return n<=0;
}

// Afficher la sortie
console.log(checkNbr(1));
console.log(checkNbr(-1));
console.log(checkNbr(0));



// exercise 5

function isEqual(nbr1, nbr2) {
	// je laisser la return faire la evaluer la condition si il est true ou fause
	//comme l'excercise 4 mais cette fois avec un operateur equal value et equal type pour avoir un boolean T ou F
	// si la condition true la function return true si no false
	return nbr1===nbr2;
}

// Afficher la sortie
console.log(isEqual(3, 6));
console.log(isEqual(1, '1'));
console.log(isEqual(1, 1));

// exercise 6
//une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.

function isDivisible(n) {
    // je utiliser la module pour avoire une resultat de la rest de division de n par 5
    //je compare cette resulta avec 0 pour etre sure que n est divisible par 5
    // je return le assignment pour tester 
    //comme l'excercise 4 mais cette fois avec un operateur equal value 
	// si la condition true la function return true si no false
	
	return ( n % 5 == 0);
}

// Afficher la sortie
console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));




// exercise 7
//une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
function hmTos(heure, minute) {
	// je pris le parametre heure et je multiply par 3600 pour convertir en second 
	// je pris la paremetre minute et je converti en second par multiply par  60
	//je return le result en mode de operation arithmathiqe
	// et ca pour eviter utilisation de variable et le code sera plus courte
	return(heure*3600+minute*60);
}

// Afficher la sortie
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));



// exercise 8
//une fonction pour inverser un tableau(SANS UTILISATION DE REVERSE())
function reverseTab(tab) {
    // je utilise la meme loop que je deja utiliser en reverse(str)  en partie 1
    //je commence par declaration de mon nouveau array qui doit je rempli avec les element de tab mais reversement
    //je fais un for loop pour capture chaque element de tableau
    //le loop a commence a la fin de tableau  et chaque eteration il prend le value et  le conserve dans reTab
    //je donne i la value de derniere element de tab
    //le iteration sera dicremente parceque on a commence par position de derniere index dans l'array
    //la loop fini quand on est au premiere index de tab soit 0 
    //chaque eteration method push() push les element  de tab en retab
    //et je le retourne la nouveau tab  reverse 
	 var reTab=[];
   for ( var i=tab.length -1;i>=0; i--){
    reTab.push(tab[i]);
  }
  return reTab;
  }


// Afficher la sortie
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));



// exercise 9
//ne fonction qui prend un tableau et renvoie le dernier élément du tableau.
function getLastElem(tab) {
// je localise la derniere index de tab par tab.length - 1;
//cette localise est due a length de tab en tatal et en deduire un parce que tab commence a index 0
// je return avec bracket notation (la method de designe un element en tableau)
	 return tab[tab.length - 1];
}

// Afficher la sortie
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));
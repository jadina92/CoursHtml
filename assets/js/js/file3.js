//partie 3

//exercise1

// une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de paramètres doivent être testés afin d’avoir une égalité.
// La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.
function checkEq(a, b) {
    /// je laisser la return faire la evaluer la condition si il est true ou fause
    //comme l'excercise 4  partie 2 mais cette fois avec un operateur equal value et equal type pour avoir un boolean T ou F
	// si la condition true la function return true si no false
    return (a===b);
}

// Afficher la sortie
console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));



//exercise2

//une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.

function isEmpty(str) {
    // declare un variable pour assignee le length de str 
    // je laisser la return faire la evaluer la condition si il est true ou fause
    //comme l'excercise 4 partie 3 mais cette fois avec un operateur equal value pour avoir un boolean T ou F
	// si la condition true la function return true si no false
	var lengthstr = str.length;
	return (lengthstr == 0);
}

// Afficher la sortie
console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));


//exercise3

//Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 ».
function concatStr(str1, str2) {
    // je fais un concatination de 2 string par + 
    //je utiliser l'escape \ pour avoire "
    // je le return 
return '\"'+ str1 + "|" + str2  +'\"';

}

// Afficher la sortie
console.log(concatStr("True", "False"));
console.log(concatStr("On", "Off"));
console.log(concatStr("A", "B"));



//exercise4

//une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne
// je fais un concatenation de mot hello avec variable name et le rest de string 
//il ya ${name} et `` pour un concatenation  plus jolie ;je appris maintenant et ce plus facile de la mienne (JE VU LA CORRECTION)
const msg = name =>'\"'+ "Hello " + name + ",Welcome to WayToLearnX!"+'\"';

// Afficher la sortie
console.log(msg("Thomas"));
console.log(msg("Alex"));
console.log(msg("Emily"));



//exercise4
//une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.

function size(str) {
    // Écrivez votre code ici
    return str.length;
    
}

// Afficher la sortie
console.log(size("alex"));
console.log(size("x"));
console.log(size(""));

//exercise4
// une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE 
//si le nombre total de caractères dans la première chaîne est égal au nombre total de caractères dans la deuxième chaîne
// sinon renvoie FALSE.

function compareSize(str1, str2) {
	// je pris les parametres str1 et str2 
    // avec un operateur equal value et equal type pour avoir un boolean T ou F
    // je laisser la return faire la evaluer la condition si il est true ou fause
	// si la condition true la function return true si no false

  return str1.length === str2.length;
}


// Afficher la sortie
console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));


//exercise7
//une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle.

function getPerimeter(height, width) {
    // je pris les parametres height et width
    //je appliquer l'operation mathmathical de trouver la perimetre 
    // je fais ensuite return
	return (height + width) * 2;
}

// Afficher la sortie
console.log(getPerimeter(2, 6));
console.log(getPerimeter(3, 10));
console.log(getPerimeter(1, 5));


//exercise8
//function qui permet de conter les pattes de animaux
function nbrsPattes(poulets, vaches, chevaux) {
    //je utilize les parametres de function pour connaitre les nbr de chaque animal 
	// mathmathical operation je prend le nbr de poulet et multiply par 2
	//je prend le nbr de vaches  et multiply par 4
    //je prend le nbr de cheveau  et multiply par 4
    //comme vache et cheveau ont les meme nbr des patte on le regroup ensemble pour avoire un code  plus court 
	//je return tout la operation
    return  (poulets * 2 + (vaches + chevaux) * 4);
}

// Afficher la sortie
console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));



//exercise9
//une fonction qui prend un nombre comme argument 
//et renvoie « pair » pour les nombres pairs et « impair » pour les nombres impairs.
function check(n) {
    //je utiliser if statement pour verifier un condition T ou F
    // la module est pour tester si il ya de rest de division 
    // si il ya de rest alors c'est un nbr impaire
    // si non le nombr n est paire
	if (n % 2){
	    return 'impaire';
	}else 
	    return 'paire';
}

// Afficher la sortie
console.log(check(2));
console.log(check(7));
console.log(check(22));
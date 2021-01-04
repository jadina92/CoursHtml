
 //PARTIE 4
 // excersice 1
 // une fonction pour concaténer deux tableaux entiers.

function concatener(tab1, tab2) {
    // je pris parametres de function et comme il sont de arrays 
    // je utilise le method concat() pour concatener les deux tableau
    // et je return le nouveau tableau
	
	return tab1.concat(tab2);
}

// Afficher la sortie
console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));


// excersice 2
// une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.

function find(tab, val) {
    // je fais un for loop pour accedez les element de tab
    //et a chaque eteration  je compare le value de de l'element a val 
    // si  val  equal a l'element je return i
    //si je pas trouve val dans tab je return -1  a la fin de loop 
    for(var i = 0; i < tab.length; i++){
        if(tab[i] == val){
            return i;
        } 
      }
         return -1;
    }

// Afficher la sortie
console.log(find([2, 7, 1], 7));
console.log(find([6, 9, 5], 6));
console.log(find([6, 7, 8], 9));



// excersice 3
//une fonction pour vérifier si un tableau contient un nombre particulier.
//je fais un for loop pour accedez les element de tab
//et a chaque eteration  je compare le value de de l'element a val 
//si je trouve je return true si non false et ca a la fin de loop 

function nbrExist(tab, val) {
	// Écrivez votr
	 for (var i = 0; i < tab.length; i++){
    if (tab[i] === val){
      return true;
    }
  }
  return false;
}

// Afficher la sortie
console.log(nbrExist([6, 7, 8], 7));
console.log(nbrExist([1, 2, 3], 5));
console.log(nbrExist([], 0));




// excersice 4
//une fonction qui prend une chaîne (un nom aléatoire). 
//Si le dernier caractère du nom est un « s », retournez TRUE, sinon retournez FALSE.

function checkS(str) {
    // je declare une variable que va contenir  la position de str
    //je utiliser le search method pour trouver la position 
    //la position dans tableau est indexee donc la derniere normalment c'est str.length-1 
    // j'attend une valeur positive pour me asure la position de "s" en derniere 
    //la valeur negative -1  va me indique que la "s" est pas dans cette indexde string 
  var position = str.search("s",str[str.length-1]);
   if (position !== -1 ){
       return "true";
   } else
       return "false";
}

// Afficher la sortie
console.log(checkS("Thomas"));
console.log(checkS("Ali"));
console.log(checkS("Alex"));
console.log(checkS("Alvis"));




// excersice 5
// une fonction qui renvoie TRUE si une chaîne contient des espaces. Sinon renvoie FALSE.
function containSpaces(str) {
	// je utiliser la meme principe que exo 4 en depend sur search pour espace
	 var espace = str.search(" ");
	 if (espace !== -1 ){
       return "true";
   } else
       return "false";
 
}

// Afficher la sortie
console.log(containSpaces("Thomas"));
console.log(containSpaces("Hello World!"));
console.log(containSpaces(" "));
console.log(containSpaces(""));


// excersice 6
//une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne. 
//Les attributs de la personne devront être extraits des trois propriétés de l’objet:

function formatPrs(personne) {
	//je fais un concatenation avec +
  return (personne.nom + " a " + personne.age + "ans. Il habite à " + personne.adresse);
}

// Afficher la sortie
console.log(formatPrs({nom: "Thomas", age: "25", adresse: "Paris"}));
console.log(formatPrs({nom: "Emily", age: "22", adresse: "Nantes"}));




// excersice 7
//une fonction qui prend une chaîne représentant l’humeur et renvoie une phrase au format suivant: « Aujourd’hui, je me sens {feeling} ».
// Cependant, si aucun argument n’est passé, retournez « Aujourd’hui, je me sens neutre ».

function myFeeling(feeling) {
	//je utiliser le concatination et escape pour return cette phrase
	return "Aujourd\'hui, je me sens" + feeling  || "neutre";
}

// Afficher la sortie
console.log(myFeeling("heureux"));
console.log(myFeeling("triste"));
console.log(myFeeling());




// excersice 8
// une fonction qui renvoie le nombre d’arguments avec lesquels elle a été appelée.
function nbrArgs() {
	// je utiliser la property de arguments.length qui donne la nbrs des arguments passer a la function 
	return arguments.length;
}

// Afficher la sortie
console.log(nbrArgs());
console.log(nbrArgs({}));
console.log(nbrArgs("A"));
console.log(nbrArgs("A", "B"));


// excersice 9
//une fonction qui prend un mot et détermine s’il est pluriel ou singulier.//**
// Un mot pluriel est celui qui se termine par « s ». S’il est pluriel renvoyer TRUE sinon FALSE.

function check(str) {
    // je conserve la position de  "s" dans position 
    //je utiliser search() pour repere 
    //si termine par "s" alors c'est pluriele et eventualement true 
    //si on a -1 s n'exist pas dans cette position et eventuallement false 
	var position  = str.search("s",str[str.length-1]);
   if (position !== -1 ){
       return "true";
   } else
       return "false";
}

// Afficher la sortie
console.log(check("enfants"));
console.log(check("filles"));
console.log(check("fille"));
console.log(check("enfant"));


//Partie 1 : exercice 1
//Cette fonction permet d'additionner les deux paramètres 
//en entrée et il faut que ces paramètres soient uniquement des nombres
function addition(x, y) {​​​​​​​​​​
    // j'additionne x et y et je le retourne
    return x + y;
}​​​​​​​​​​

// Afficher la sortie
console.log(addition(1,2));
console.log(addition(-2,-4));




//excercise 2
//Cette fonction permet de convertir minutes a second

function minuteToSecond(minutes) {
    // je multiply minutes par 60 pour convertir a second et je le retourne
     return  minutes*60;
  } 
  
  // Afficher la sortie
  console.log(minuteToSecond(4));
  console.log(minuteToSecond(3));
  


  //exercise 3
  //une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat
  function increment(n) {
    // je pris le parametre qui etait passer par le function increment
    // et je addition par nombr "un" pour incremente
    //et je le retourne
    return n+1;
  }
  
  // Afficher la sortie
  console.log(increment(1));
  console.log(increment(4));


  //exercise 4
  //une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface
  function getSurface(base, hauteur) {
    //  je pris le parametres ( base et hauteur) qui etait passer par le function get surface
    //je appliquer la formule de surface de un triangle 
     //et je le retourne
    
    return  (base * hauteur) / 2;
  }
  
  // Afficher la sortie
  console.log(getSurface(8, 2));
  console.log(getSurface(7, 3));



  // excercise 5
  // une function pour inverser une chaîne de caractères.
  function strReverse(str) {
    // je declare et assigne variable restring a une value vide pour le remplir apres de values
    //je fais un for loop pour capture chaque element de string
    //le loop a commence a la fin de string et chaque eteration il prend le value et  le conserve dans restring
    //je donne i la value de derniere element de string 
    //le iteration sera dicremente parceque on a commence par position de derniere character dans la str
    //la loop fini quand on est au premiere character de str
    //a la fin de loop la restring sera rempli de la string str mais evidement a la inverse order
    //et je le retourne la nouveau string reverse 

    var reString="";
   for ( var i=str.length -1;i>=0; i--){
    reString +=str[i];
  }
  return reString
  }
  // Afficher la sortie
  console.log(strReverse("WayToLearnX"));
  console.log(strReverse("Hello"));


  //exercise 6
  // un programme JavaScript pour trouver le plus grand des trois entiers donnés.
  function getMax(a, b, c) {
    // je fais une comparison entre le trois parametres avec un if statement 
    // pour avoir a comme un grand nombre je specifie que il faut que a soit plus grand  de b 
    // et a plus grand  de c et evidement a sera la grand nombre si 1ere condition est true 
     //je utilise le & pour garantee que le deux condition soit true
     //si un de condition est fausse alors on va appliquer an autre condition pour etre sur de l'order 
     //je compare a a c pour assure que c est la grand parceque la dessou on a unde condion est fausse 
     // et on va faire un check out to preserve l'ordre
    // la return sera pour la  plus grand entre 3 parametres
    // 
    if ((a>b)(a>c)){
        return a ;
    }else{
        if(a<c){
            return c;
        }else 
             return b;
        }
    } 


    //exercise 7
    //une fonction qui prend un tableau et renvoie le premier élément.
    function getFirst(tab) {
        // je connais que la 1ere index de l'array ou tableau est 0
        // je utiliser le bracket notation pour acceder au tableau 
        //  la return sera pour la 1re index que est evidement la 1ere element de tableau
        return tab[0];
    }
    
    // Afficher la sortie
    console.log(getFirst([1, 2, 3]));
    console.log(getFirst([50, 60, 70]));



     //exercise 8
     // un programme JavaScript pour renvoyer le reste de deux nombres
     
function resteDiv(a, b) {
    // la operateur module sert a trouver la rest de division de 2 nombres
    //je appliquer la operateur % pour acheve mon goal et je le retourne
    return a % b;
}

// Afficher la sortie
console.log(resteDiv(1, 3));
console.log(resteDiv(2, 4));
console.log(resteDiv(3, 3));





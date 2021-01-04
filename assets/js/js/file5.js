//partie 5

//exercise 1
//une fonction qui prend un entier et:
//Si le nombre est un multiple de 3, retournez « Hello ».
//Si le nombre est un multiple de 5, retournez « World ».
//Si le nombre est un multiple de 3 et de 5, retournez « Hello World ».
function checkNbr(n) {
    //je utiliser le condition if pour valoriser chaque condition
    // le module pour trouver si divisible par 3 ou 5
    //je commencer par divisibilite de 3 et 5 si true doncc on return hello world 
    //si false je mis un autre condition pour tester divisibilite par " ,si le cas donc on hello"
    //si cette condition est false on test an autre pour etre sure que le nbr est divisible par 5 et ion return world si true
    if  ( n % 3 === 0 && n % 5 === 0 ){
        return "Hello World";
       }
       else if ( n % 3 === 0 ) {
         return "Hello";
       }
       else if ( n % 5 === 0 ) {
       return "World";
       }

   }

// Afficher la sortie
console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));




//exercise 2
//l’expression régulière qui révèle le message caché.
//supprimer tous les nombres pour révéler le message. Utilisez la classe de caractères \D dans votre expression.

var str = "242Welcome23 45to344 254324WayToLearnX!";
//la syntax de rgular expression est /pattern/modifier
//je mis le g pour un global match
// le \D pour trouver a non-digit chracter 
//le * correspond a quantificateur et correspond a 0fois l'element precedent
var patt =  /\D */g;
var result = str.match(patt);

console.log(result.join(""));





//exercise 3
//une fonction qui prend un tableau avec des nombres et retourne un tableau avec les éléments multipliés par deux.

function tabX2(tab) {
    // je utiliser la method map() qui va retourner une nouveau tableau selon la function que je passer 
    //ici c'est multiply chaque element de tb par 2 pour doubler
	return tab.map(i => i * 2)
}

// Afficher la sortie
console.log(tabX2([1, 2, 3]));
console.log(tabX2([5, 10, 20]));
console.log(tabX2([100, 200, 300]));



//exercise 4
//une fonction qui prend trois nombres comme arguments et renvoie TRUE si c’est un triangle, sinon renvoie FALSE.
function isTriangle(a, b, c) {
    //on sait que la somme de deux cote de triangle doit etre plus grand que laa troisieme 
    //on fait les condition pour les trois cote si ce le cas donc on a un triangle 
 if ((a+b>c)&&(a+c>b)&&(b+c>a)){
     return "true";
 }else 
 return "false";
}

// Afficher la sortie
console.log(isTriangle(2, 3, 4));
console.log(isTriangle(2, 4, 5));
console.log(isTriangle(8, 2, 1));




//exercise 5
//une fonction qui renvoie la valeur ASCII du caractère transmis.
// je le connais  pas cette method !! a noter !!
function charToAscii(c) {
    return c.charCodeAt(0);
  }


  //exercise 7
  //une fonction qui prend un tableau et renvoie la somme de tous les nombres du tableau.
  function sum(tab) {
      	// je utilise le method reduce qui addition current element a sum total et je initialise le total sum a 0
   return  tab.reduce((a,b)=> a+b, 0);
 
}
	

// Afficher la sortie
console.log(sum([1, 1, 1]));
console.log(sum([1, 2, 3]));
console.log(sum([-2, 2, 1]));


 //exercise 8
//une fonction qui prend un tableau de mots et le transforme en un tableau de longueur de chaque mot.
function countStr(tab) {
	// comme la exo precedent je utilise reduce ici map suits pour transferer chaque element a une nbr selon le  longeur de str 
	return tab.map(str => str.length);
}

// Afficher la sortie
console.log(countStr(["A", "B", "C"]));
console.log(countStr(["Welcome", "To", "WayToLearnX"]));
console.log(countStr(["Bob", "Ali", "Thomas"]));



//exercise 8
// une fonction qui renvoie le nombre de syllabes dans une chaîne.

function nbrOfSyllables(str) {
    //supposon que chaque str a un syllable de 2 character comme exampl donne 
    //je prend le longeur de string et divise par 2 et je le return 
    //si cetait une str de 3 character repeter on divise par 3

 return str.length/2;
}

// Afficher la sortie
console.log(nbrOfSyllables("SOSSOSSOS"));
console.log(nbrOfSyllables("HAHAHAHAHA"));
console.log(nbrOfSyllables("RIRIRIRIRIRIRIRIRIRI"));
//partie 6
// exercise 1
//une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre ou non.
function checkOrder(str) {
    // je apliter les element de string par ""
    //apres je utilise method sort() pour donne order alphabetique 
    // a la fin je re-join la string  mais sorted cette fois-ci 
    // la but  de function est de return tue pour sorted et false pour str non sorted 
    
	var manupilation =str.split("")
	                     .sort()
	                     .join("");
	return str===manupilation;
	           
}

// Afficher la sortie
console.log(checkOrder("abc"));
console.log(checkOrder("zyx"));
console.log(checkOrder("123"));
console.log(checkOrder("aabbcc"));



// exercise 1


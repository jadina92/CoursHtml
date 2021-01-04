

 
 
function actualDate() {
    var myDate = new Date();
    var myhours = myDate.getHours();
 document.writeln('<p> aujourdhuie on le :', myDate,'<br>',"et l'heure actuelle est :",myhours,'</p>');
}
actualDate() ; 

var notes = [5, 12, 8, 20, 10];


function afficheTableau(t) {
    document.writeln('<p>le tableau est :</p>');
    document.writeln('<table border="1"><tr>');
    for (var i = 0; i < t.length; i++) {
      document.writeln('<td>', t[i], '</td>');
    }
    document.writeln('</tr></table>');
    document.writeln('<p>','la premiere numbre est ' ,t[0], '</p>');
  }
  afficheTableau(notes);

//Q2
 function sum(a,b){
   return document.writeln('</p> sum est : ', a+b ,'</p><br>');
 }
 function multiplication(a,b){
    return  document.writeln('</p> multiplication  est : ', a*b ,'</p>');
}
function sutraction(a,b){
    return  document.writeln('</p> sutraction  est : ', a-b ,'</p><br>');
}
function division(a,b){
    return  document.writeln('</p> la division  est : ', a/b ,'</p>');;
}
sum(2,3);
multiplication(5,6);
sutraction(5,6);
division(5,6);



//Q3 convert minutes to seconds


document.writeln('<br>');
function MinutesToSeconds(minutes) {
    return Math.floor(minutes * 60);
   }
   var seconds = MinutesToSeconds(2);
   document.writeln( " convert minutes to seconds  : " + seconds ); 

   document.writeln('<br>');
   document.writeln('<br>');
   document.writeln('<br>');
   document.writeln('<br>');


   //age 

/**
 *
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
   
    return age;
}
document.writeln('<br>');

document.writeln(getAge('2010/04/29'));*/

//convert age to jour
function age(myage){
    ageDays = myage*365;
    return  document.writeln( " convert age to days  : " + ageDays ); 
}
age(2);

document.writeln('<br>'); 
  document.writeln('<br>');
/*
  //exercise 3 test 
  Document.write('<p> this is my first sentence </p>');
  Document.write('<p> un number: 2 </p>');
  Document.writeln('<p> this is my first sentence </p>');
   Document.write('<p> un number: 2 </p>');
   var test = string;
   Document.writeln('<p> this is variable :' +test +'</p>');

*/

// Q2
/*
  function comparison(temperature,num) {
   var temperature;
   var num;
if (temperature < num){

     Document.writeln('<p>la temperature est infiriore a: ',num,'</p>');
}else{
     Document.writeln('<p>la temperature est superior a: ',num,'</p>');
}
}
comparison(10,5);


  //Q3while loop for loop
  for (var i = 0; i < 100; i++) {
      document.writeln('<p> les boucle de for :',i,'<p>');  
  }
var i= 0;
while (i<100) {
    document.writeln('<p> les boucle de while :',i,'<p>');
    i++;
}
*/




// EXERCISE 4 fizz buzz

    function fizzBuzz() {
        for (var i = 1; i <= 100; i++) {
          if ( i % 3 == 0 && i % 5 == 0 ) {
            document.writeln('<p>' ,i, 'FizzBuzz </p>');
          }
          else if ( i % 3 == 0 ) {
            document.writeln('<p>' ,i,' Fizz </p>');
          }
          else if ( i % 5 == 0 ) {
            document.writeln('<p>' ,i,' Buzz </p>');
          }
        }
      }
      fizzBuzz();



      //sum and produit de an array 'tableau'
    
      //   exo 5
/*
 var tab =[2,4,6];
function mysum(tab) {
  var total = 0;
    for( var i in tab){
      total += tab[i];
      
      console.log(total);
    }
  
   // document.writeln('<p> la sum de tab  est ', total,'</p>');
}
 /*   

function myproduit(tab) {
    var produit  = 0;
    for (var i = 0; i < tab.length; i++) {
      produit *= tab[i];
  }
  document.writeln('<p> la produit de tab  est ', produit ,'</p>');
  }
*/
// random number
  var tab= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  var randomNum = Math.random();
 var floornum = tab[Math.floor(randomNum*tab.length)];
 if ((floornum % 2) == 0){
  document.writeln('<p> random number  ', floornum ,'est pair </p>');
 }else{
  document.writeln('<p> random number  ', floornum ,'est unpair </p>');

 }



/*
 // TIRAGE AU SORT DES NOM 
        
var list = [];
  function yourName(){
    var nom = prompt('ajouter  un nom :');
    list.push(nom);
  }  

  function tirage(){
    var randomNum = Math.random();
    var randomName = Math.floor(randomNum*list);
  }
*/

    






 
 // calculatrice


function calculator(op){
  
  var firstnum = parseInt(document.calc.nbr1.value) ;
  var secondnum= parseInt(document.calc.nbr2.value) ;
  var operation = document.calc.op.value; 

  if (operation == "add"){
    calc = a + b; 
  }else if (operation == 'min'){
    calc = a - b ;
  }else if (operation == 'mult'){
    calc = a * b ; 
  }else if (operation == 'div'){
    calc = a / b ;
  }
  calc= calculator(op);
console.log(calc);
var somme = array.reduce((sum, elem) => console.log(sum + elem));
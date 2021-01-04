// exo1 

var student={ 
  //properties of object student
    nom:"DavidRayy",
    class:"VI",
    rollno:12
};
  console.log(student);//object before {nom: "DavidRayy", class: "VI", rollno: 12}
  delete student.rollno;// method to delete a property from object 
  console.log(student);// object after delete propery {nom: "DavidRayy", class: "VI"}



//exo2
//recette prefere
var maRecette ={
     nom:"taboule",
     service:2,
     ingredients:["persil" ,
                  "onion" ,
                  "bulgour",
                  "citron" ,
                  "tomate" ]

};
/* output 
 NOM: taboule
 SERVICES: 2
 INGREDIENTS:
 -persil
 -onion
 -bulgour
 -citron
  tomate */

console.log( "NOM: "+ maRecette.nom);
console.log("SERVICES: " + maRecette.service);
console.log("INGREDIENTS:");
for (var i=0 ; i< maRecette.ingredients.length;i++){
console.log("-" + maRecette.ingredients[i] );

}




//exo 3
//etat de lecture
   
var livre = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

    //a for loop in order to fetch all the elements of array 
    // then accessing each element object with dot notation 
    for (var i = 0; i < livre.length; i++){
              
     console.log( "TITLE: " + livre[i].title + " written by  " + livre[i].author + ": " + livre[i].readingStatus);
          
    }
     

    

  
   //exo 4
  // part 1

  
class  Gurriers {
  nom;
  attack;
  defense;
  sante;
  constructor (nom, attack, defense, sante){
   this.nom = nom;
   this.attack = attack;
   this.defense = defense;
   this.sante = sante;
   }
  //method de class gurriers
  frappe(gurrier) {
    console.log(this.nom + " frapper "+ gurrier.nom  + " avec un attack de : "+this.attack);
    gurrier.sante= gurrier.sante-this.attack; 
    console.log("la nouvelle sante de "+ gurrier.nom +" apres la frappe pass a :" + gurrier.sante);
  }

}


//
var firstGurrier= new Gurriers("firstGurrier", 10, 50, 200);
var secondGurrier = new Gurriers("secondGurrier", 20, 30, 250);

//let's play 
firstGurrier.frappe(secondGurrier);
secondGurrier.frappe(firstGurrier);



// part 2
// Start of Magicien class (specialized gurriers, the class parent)
//class that inherits the properties and methods of class Gurriers

 class Magicien extends Gurriers {
     mana;
    constructor(nom, attack, defense, sante,mana){
          super(nom, attack, defense, sante);
          this.mana= mana
     }
   //method of magicien
   heal () {
      if (this.mana > 10) {
           console.log((this.nom + " essai de se soigner "));
           this.sante += 10;
           this.mana -= 10;
           console.log(this.nom + " possede  " + this.sante + " apres le soin ");
      }
       else {
           console.log("n'a pas asssez de mana");
   }
 }

}

var merlin= new Magicien( "merlin", 30, 40, 250,30);

//let's play

firstGurrier.frappe(merlin); // function frappe from class Guerrier
secondGurrier.frappe(merlin); // function frappe from class Guerrier
merlin.heal();
merlin.frappe(secondGurrier); // function frappe from class Magicien
merlin.frappe(firstGurrier); // function frappe from class Magicien

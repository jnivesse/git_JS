class Personne{
    constructor (sNom,sAge){
        this.nom=sNom;
        this.age=sAge;
    }
    get sePresenter(){
        if(this.age!=0){
            return`salut,je m'appelle ${this.nom} et j'ai ${this.age} ans`;
        } else {
            return`salut,je m'appelle ${this.nom} et je suis un bébé`;
        }
    }
}
// if( ${this.age} !=0) POURQUOI???????
const personne1 = new Personne("bruce","42");
const personne2 = new Personne("Brandon","0");
console.log(personne1.sePresenter);
console.log(personne2.sePresenter);

console.log("Prototype chien");

function Chien(nom,race){
    this.nom=nom;
    this.race=race;
}
Chien.prototype.aboyer = function() {
    console.log("Woof ! Je suis"+ this.nom+", un "+this.race);
}
const chien1= new Chien(" Médor","labrador");
chien1.aboyer();

console.log("Le rectangle");
class Rectangle{
    constructor (sLargeur,sLongueur){
        this.largeur=sLargeur;
        this.longueur=sLongueur;
    }
    get perimetre(){
        let peri = 2*this.largeur + 2*this.longueur;
        return peri;
    }
    get aire(){
        let air = this.largeur *this.longueur;
        return air;
    }
}
const rectangle1=new Rectangle(4,5);
console.log(rectangle1.aire);
console.log(rectangle1.perimetre);
console.log("les bagnoles");
class Vehicule{
    constructor(sTonnes){
        this.tonne=sTonnes;
    }
}
class Voiture extends Vehicule{
    constructor (sMarque,sTonnes){
        super(sTonnes);
        this.marque=sMarque;
    }
}
const voiture1=new Voiture("citroen",1.5);
console.log(voiture1);
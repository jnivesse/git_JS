let titles;
titles=document.querySelectorAll("h1");

let donne=document.getElementById("donneClasse");
let compteurDonne=0;
donne.addEventListener("click",function (){
    titles[compteurDonne].classList.add("red");
    compteurDonne++;
    if(compteurDonne==titles.length){
        compteurDonne=0;
    }
});

let enleve=document.getElementById("enleveClasse");
let compteurEnleve=0;
enleve.addEventListener("click",function (){
    titles[compteurEnleve].classList.remove("red");
    compteurEnleve++;
    if(compteurEnleve==titles.length){
        compteurEnleve=0;
    }
});
let change=document.getElementById("switchClasse");
change.addEventListener("click",function (){
    for(i=0;i<titles.length;i++){
    titles[i].classList.toggle("red");
    }
});
/*
const pokemons=document.querySelector("#pokemons");
let li = document.createElement("li");
li.innerText = "*";
pokemons.appendChild(li);
let img = document.createElement("img");
img.src = "";
pokemons.appendChild(img);

const apiDiv = document.querySelector('.apiContact');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contactApi = async () => {
//Data va récupérer toutes les données de l'API
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    console.log(data);
//Plutôt que de Travailler sur la réponse, on va la transformer pour
//qu'elle devienne un OBJET JS (+ pratique)
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    dataTransformed.results.forEach(pokemon => {
        console.log(pokemon);
        let li = document.createElement("li");
        li.innerText=pokemon.name;
        pokemons.appendChild(li);
// charger les images
        const contactApi2 = async () => {
            const data2 = await fetch(pokemon.url);
            const dataTransformed2 = await data2.json();
            console.log(dataTransformed2);
            let img = document.createElement("img");
            img.src = dataTransformed2.sprites.front_shiny;
            li.appendChild(img);
            console.log(img);
        }
        contactApi2();
    });
};
contactApi();
*/
// Sélectionne l'élément HTML avec la classe "apiContact" et le stocke dans la variable apiDiv
const apiDiv = document.querySelector('.apiContact');
// Affiche les attributs de l'élément apiDiv dans la console
console.log(apiDiv.attributes);
// Fonction asynchrone qui effectue une requête à l'API Pokémon
const contactApi = async () => {
// Effectue une requête fetch pour obtenir les données de l'API
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');    
// Transforme les données en format JSON
    const dataTransformed = await data.json();   
// Parcourt la liste des résultats de l'API
    apiDiv.innerHTML = "<ul>"
    for (let index = 0; index < dataTransformed.results.length; index++) {
        const element = dataTransformed.results[index];
        const dataImg = await fetch(element.url);
        const dataImgTransformed = await dataImg.json();
        dataImgTransformed.sprites.front_default;
        console.log(dataImgTransformed.sprites.front_default);
// Modifie le contenu de l'élément apiDiv en ajoutant le nom du Pokémon suivi d'une balise de saut de ligne
        apiDiv.innerHTML = apiDiv.outerHTML + "<li> " + "<img src='"+dataImgTransformed.sprites.front_default+"'>" + element.name + "</li>";  
// Affiche le texte actuel de apiDiv dans la console
        //console.log(apiDiv.outerText); 
    }
    apiDiv.innerHTML = apiDiv.outerHTML + "</ul>";
}
contactApi();
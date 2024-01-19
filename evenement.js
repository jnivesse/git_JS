
let clique=document.querySelector("#cliqueButton");
let compteur=0;
clique.addEventListener("click",function (){
    event.stopPropagation();
    compteur++;
    let p = document.createElement("p");
    if(compteur==1){
        p.innerText="oui c'est bien";
        clique.innerHTML="";
        clique.appendChild(p);
    }if(compteur==2){
        p.innerText=" encore!";
        clique.innerHTML="";
        clique.appendChild(p);
    }if(compteur==3){
        p.innerText="oh oui encore!";
        clique.innerHTML="";
        clique.appendChild(p);
    }if(compteur==4){
        p.innerText="VAS-Y!CLIQUE!!!";
        clique.innerHTML="";
        clique.appendChild(p);
    }if(compteur==5){
        p.innerText="😳😳😳";
        p.style.fontSize = "50px";
        clique.innerHTML="";
        clique.appendChild(p);
    }if(compteur==6){
        p.innerText="clique-moi";
        clique.innerHTML="";
        clique.appendChild(p);
        compteur=0; 
    }  
});
function fadeIn(element) {
    let opacity = 0;
    let intervalId = setInterval(function () {
        opacity += 0.003; // Ajustez le taux d'augmentation de l'opacité si nécessaire
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(intervalId); // Arrête le premier intervalle
            let fadeOutInterval = setInterval(function () {
                opacity -= 0.007; // Ajustez le taux de diminution de l'opacité si nécessaire
                element.style.opacity = opacity;
                if (opacity <= 0) {
                    clearInterval(fadeOutInterval); // Arrête le deuxième intervalle
                }
            }, 10); // Ajustez l'intervalle de temps entre chaque diminution
        }
    }, 10); // Ajustez l'intervalle de temps entre chaque augmentation
}
document.addEventListener("click", function(peeepoo) {   
    let x = peeepoo.clientX;
    let y = peeepoo.clientY;
    console.log(x, y);
    for (let i = 1; i < 120; i++) {
        setTimeout(firstCircle, i*50);
            function firstCircle() {
                let divImage = document.createElement("div");
                divImage.style.left = ((Math.cos(i/3)) * 150) + x + "px";
                divImage.style.top = ((Math.sin(i/3)) * 100) + y + "px";
                divImage.style.position = "absolute";
                let image = document.createElement("img");
                image.src = "Peepo-PNG-File.png";
                image.style.width = "50px"; 
                image.style.height = "50px";
                divImage.appendChild(image);
                document.body.appendChild(divImage);
                fadeIn(divImage);
            }
    }
    for ( let j = 1; j < 120; j++) {
        setTimeout(secondCircle, j*50);
            function secondCircle() {
                let divImage = document.createElement("div");
                divImage.style.left = ((Math.cos(-j/3)) * 150) + (300 + x) + "px";
                divImage.style.top = ((Math.sin(-j/3)) * 100) + y + "px";
                divImage.style.position = "absolute";
                let image = document.createElement("img");
                image.src = "Peepo-PNG-File.png";
                image.style.width = "50px"; 
                image.style.height = "50px";
                divImage.appendChild(image);
                document.body.appendChild(divImage);
                fadeIn(divImage);
            }    
    }
});

             
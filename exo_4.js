let monInput = document.getElementById("monInput")
monInput.addEventListener("focus",function(){
    monInput.style.backgroundColor="blue";
    monInput.style.color="white";
});
monInput.addEventListener("blur",function(){
    monInput.style.backgroundColor="yellow";
    monInput.style.color="black";
});

let arrImg=document.getElementsByTagName("img");
console.log(arrImg);
realArr=Array.from(arrImg);
console.log(realArr);
realArr.forEach(function(img,index) {
    img.addEventListener("load", function() {
        console.log("L'image",index ,"est chargée:");        
    });
});
//Exercice 6
let titre=document.querySelector(".titre");
document.addEventListener("mousemove", function(horsPage) {   
    let x = horsPage.clientX;
    let y = horsPage.clientY;
    //console.log(y);
    if(x<100 || y<100){
        titre.classList.remove("titre");
        titre.style.backgroundColor="red";
    }else{
        titre.classList.add("titre");
    }
// Exercice 7
    let maxY= document.documentElement.scrollHeight;
    let progress=document.querySelector("#file");
    progress.setAttribute("value",y);
    progress.setAttribute("max",maxY);
});
// Execice 8
let exo8=document.querySelector("#texte");
let texte=document.querySelector("p");
exo8.addEventListener("input",function(){
    texte.innerText=exo8.value;
    //texte.appendChild(exo8);
});

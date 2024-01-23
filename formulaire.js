let catchMonTxt=document.getElementById("#comment");
let monTxt;
catchMonTxt.addEventListener("input",function (){
    monTxt=parseInt(catchMonTxt.value);
    let div = document.getElementById("image");
    let p=document.createElement("p");
    p.innerText=monTxt;
    div.append(p);
});


const moon=document.getElementById("lune");
let objMoon=moon.getBoundingClientRect();
const x=objMoon.x;
const y=objMoon.y;
console.log("x",x,"y",y);
function unTour(){
    let width = 75; 
    let height = 75;   
    for(let i=0; i<60; i++){
        setTimeout(revolution,i*45);
        function revolution(){
            moon.style.left = ((Math.cos(i/(3*Math.PI))) * 18) + 52 +"%";  //*240 +792
            moon.style.top = ((Math.sin(i/(3*Math.PI))) * 12)  + 45 +"%";  //120 +330
            if(i%(20*Math.PI) >25 && i%(20*Math.PI)< 60){
                moon.style.zIndex=1;            
            } else{
                moon.style.zIndex=3;
            }
            if(i%(20*Math.PI)<=15){
                moon.style.width=width+ "px";
                moon.style.height= height+"px";
                width++;
                height++;
            }if(i%(20*Math.PI)>=15 && i%(20*Math.PI)<=45){
                moon.style.width=width+ "px";
                moon.style.height= height+"px";
                width--;
                height--;
            }if(i%(20*Math.PI)>45){
                moon.style.width=width+ "px";
                moon.style.height= height+"px";
                width++;
                height++;
            }
        }
    }
}
unTour();
setInterval(unTour,2690);
const star=document.getElementById("star");
star.style.display="none";   
const xMax = document.documentElement.scrollWidth;
const yMax = document.documentElement.scrollHeight;
console.log(xMax);
let toss;
let rngX;
let rngY;
let rngStarX;
let rngStarY;
function tossF(){
    toss=Math.round(Math.random()*1);
}
function randomX(){
    if(toss==1){
        rngX=xMax;
    } else{
        rngX=0;
    }
    return rngX
}
function randomY (){
    if(toss==1){
        rngY=yMax-100;
    } else{
        rngY=100;
    }
    return rngY;
}
function randomStar(){
    rngStarX=Math.round(Math.random()*xMax);
    rngStarY=Math.round(Math.random()*(0.9*yMax));
    return rngStarX,rngStarY;
}
function firestar(){
    star.style.display="block";
    tossF();
    randomX();
    tossF();
    randomY();
    randomStar();
    for(let i=0; i<200; i++){
        setTimeout(etoile,i*3);
        function etoile(){
            let blaX=(rngStarX+(((rngX-rngStarX)/200)*i));
            star.style.left=blaX + "px";
            star.style.top=(rngStarY+(((rngY-rngStarY)/200)*i)-100) + "px";
            //console.log(blaX);
            if(blaX<10 || blaX>(xMax-25)){
                star.style.display="none"; 
            }
        }
    }
}  
firestar();
setInterval(firestar,3000);





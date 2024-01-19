/*
let tousLesP = document.getElementsByTagName('p');
console.log('la HTML collection',tousLesP);
let tousLesSuper=document.getElementsByClassName('super');
console.log(tousLesSuper);
//toString(tousLesP); //????
*/
var dob = new Date("07/07/1989");
//calculate month difference from current date in time
var month_diff = Date.now() - dob.getTime();

//convert the calculated difference in date format
var age_dt = new Date(month_diff);

//extract year from date    
var year = age_dt.getUTCFullYear();

//now calculate the age of the user
var age = Math.abs(year - 1970);

let user = {
    name: "John Delavega",
    mail: "John.Delavega@gmail.com",
    age1: age,
    birthDate: dob.toLocaleDateString(),
    princess: true
}

console.log(user);

let newBody = document.querySelector('body');
newBody.style.background = 'linear-gradient(to right, purple, yellow)';
let div = document.getElementById("image");
let img = document.createElement("img");
img.src = "Capture d'écran 2024-01-15 144435.png";
div.appendChild(img);

let titre = document.getElementById("titre");
let h3 = document.createElement("h3");
h3.innerText = user.name;
h3.style.color = "white";
titre.appendChild(h3);

let p1 = document.getElementById("image");
let p = document.createElement("p");
p.innerText = user.mail;
p1.append(p);

let p2 = document.getElementById("P2");
let p21 = document.createElement("p21");
p21.innerText = user.age1;
p21.style.border = "2px solid white";
p2.appendChild(p21);

let p3 = document.getElementById("P3");
let p31 = document.createElement("p31");
p31.innerText = user.birthDate;
p3.appendChild(p31);

let p4 = document.getElementById("P4");
let p41 = document.createElement("p41");
p41.innerText = user.princess;
p4.appendChild(p41);


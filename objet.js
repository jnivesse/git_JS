/*
let user = {
    id: 3657826,
    'name': 'Seagal',
    firstName: 'Steven',
    badges: ['� ', '� ', '� ', '� ', '� ']
};
console.log(user);
let passions = {
passion1: "le motoGP",
}
user.passions=passions;
console.log(user.passions.passion1);
passions.passion2="casser des gueules!!";
console.log(user);
if(user.badges[3]==='� '){
   user.id *=10;
}

console.log(user);
let user2 = object.assign({},user);
user2.name = 'Norris';
user2.firstName =' Chuck';
user2.id = 23;
console.log(user2);
*/
/*
function statut(id){
    for(const id of user){
        let texte=document.querySelector("#texte");
        let p = document.createElement("p");
        p.innerText="Salut " +user.firstName+", tu as " +user.badges.length + " badges, mais ta grande passion c'est " + user.passions.passion2 + "!";
        texte.appendChild(p);
    }
}
statut(36578260);
*/
let arrUser=[];
let id =0;
function creatUser(name,firstName,){
    let user;
    user={
        id:id, //aller voir get set
        name:name,
        firstName:firstName,
        badges:[],
        passions:[]    
    }
    arrUser.push(user); // penser a faire correspondre ID et postion arr
    id++;// arrUser.length
    return user;
}
function getUserById(id){
    return arrUser[id];
}
//let bruce = creatUser("Lee","Bruce");
creatUser("Lee","Bruce");
creatUser("Noris","Chuck");
console.log(getUserById(0));
function pushPassion(arrUser,passion){
    let passions = arrUser.passions;
    passions.push(passion);
    arrUser.passions=passions;
    return arrUser;        
}
pushPassion(arrUser[1],"surtout casser des gueules!!");
pushPassion(arrUser[1],"les séries nulles");
pushPassion(arrUser[0],"aussi casser des gueules!!");
//console.log(arrUser[1].passions);
//console.log(arrUser);
function statut(user){
    let texte=document.querySelector("#texte");
    let p = document.createElement("p");
    p.innerText="Salut " +user.firstName+", tu as " +user.badges.length + " badges, mais ta grande passion c'est " + user.passions[0] + "!";
    texte.appendChild(p);
    return;
}
statut(arrUser[1]);
statut(arrUser[0]);
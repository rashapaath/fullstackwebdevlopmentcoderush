let cardarr=[]
let sum=0;

let cardelt=document.getElementById("cards");
let sumelt=document.getElementById("sum");
let messageelt=document.getElementById("result");

let isAlive=true;
let hasBlackJack=false;
let message="";

function start(){
    isAlive=true;
    hasBlackJack=false;
    cardarr=[];

    let fcard=Math.floor(Math.random()*10);
    let scard=Math.floor(Math.random()*10);
    cardarr.push(fcard);
    cardarr.push(scard);

    sum=fcard+scard;

    render();

}
function newcard(){
    if(isAlive === true && hasBlackJack === false){
    let cardnew=Math.floor(Math.random()*10);
    cardarr.push(cardnew);
    sum+=cardnew;
    render();}
}
function render(){
    cardelt.innerText=`cards:`;
    for(let i=0;i<cardarr.length;i++){
        cardelt.innerText+=` ${cardarr[i]},`;
    }
    sumelt.innerText=`sum:${sum}`;
    if(sum<21){
        message="do ypu want to draw a new card?,🙂";
    }
    else if(sum==21){
        message="wooh!you got a blackjack,🤩";
        hasBlackJack=true;

    }
    else{
        message="oh you lost,you're out of the game,🥹";
        isAlive=false;
    }
    messageelt.innerText=message;
}


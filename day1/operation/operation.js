let elt1=document.getElementById("elt1").innerText;
let elt2=document.getElementById("elt2").innerText;
let anselt=document.getElementById("anselt");
let ans;
function add(){
    ans=elt1+elt2;
    anselt.innerText=`sum:${ans}`;
    ans=0;
}
function subtract(){
    ans=elt1-elt2;
    anselt.innerText=`difference:${ans}`;
    ans=0;
}
function divide(){
    ans=elt1/elt2;
    anselt.innerText=`fraction:+${ans}`;
    ans=0;
}
function multiply(){
    ans=elt1*elt2;
    anselt.innerText=`product:${ans}`;
    ans=0;
}
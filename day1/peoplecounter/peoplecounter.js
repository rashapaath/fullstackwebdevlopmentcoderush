
let count=0;
let saveelt=document.getElementById("saveelt");

function increment(){
    console.log("the button was clicked")
    count++;
    document.getElementById("count-el").innerText=count;

}
document.getElementById("count-btn").onclick=increment;
function save(){
    let elt=count+" - ";
    saveelt.textContent+=elt;
    count=0;
    console.log(count);
    document.getElementById("count-el").innerText=count;
;

}

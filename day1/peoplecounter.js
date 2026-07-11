
let count=0;

function increment(){
    console.log("the button was clicked")
    count++;
    document.getElementById("count-el").innerText=count;

}
document.getElementById("count-btn").onclick=increment;

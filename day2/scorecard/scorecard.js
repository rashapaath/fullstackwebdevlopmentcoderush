function add(elt,btn){
    let eltdisplay=document.getElementById(`${elt}`);
    let eltval=Number(eltdisplay.innerText);
    eltval+=btn;
    eltdisplay.innerText=eltval;



}
function reset(elt){
    document.getElementById(`${elt}`).innerText=0;
}

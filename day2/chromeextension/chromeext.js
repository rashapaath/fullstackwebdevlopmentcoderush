let leadarr=[];
const inputbtn=document.getElementById("input-btn");
const inputelt=document.getElementById("input-elt");
const inputurl=document.getElementById("input-url");
let ulelt=document.getElementById("ul-elt");
let leadarrfromlocalstorage=localStorage.getItem("mylead");
if(leadarrfromlocalstorage){
    leadarr=JSON.parse(leadarrfromlocalstorage);
    rendercontent();
}

inputbtn.addEventListener("click",function(){
    leadarr.push({title:inputelt.value,url:inputurl.value});
    localStorage.setItem("mylead",JSON.stringify(leadarr));
    rendercontent();
    inputelt.value="";
    inputurl.value="";
});
function rendercontent(){
    let list="";
    for(let i=0;i<leadarr.length;i++){
        list+=`
        <li>
            <strong>${leadarr[i].title}</strong>
            <a href="${leadarr[i].url}" target="_blank">${leadarr[i].url}</a>
        </li>
        `;

    }
    ulelt.innerHTML=list
}
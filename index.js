let arrow=document.querySelector(".arrow");
let arrowIcon=document.getElementById("arrowIcon")
let list=document.getElementById("list");
let options=document.getElementsByClassName("options");
let selectText=document.getElementById("selectText")

arrow.addEventListener("click",()=>{
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
})

for(option of options){
    option.onclick= function(){
        selectText.innerHTML=this.textContent;
        arrowIcon.classList.toggle("rotate");
        list.classList.toggle("hide");
}
}

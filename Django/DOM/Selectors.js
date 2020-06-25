var One  =  document.querySelector('#one')
var Two  =  document.querySelector('#two')
var Three  =  document.querySelector('#three')

One.addEventListener("mouseover",function(){
    One.textContent = "Mouse Currently Over me";
    One.style.color = "red";
}) 
One.addEventListener("mouseout",function(){
    One.textContent = "Hover Overed me";
    One.style.color = "blue";
})
Two.addEventListener("click",function(){
    Two.textContent = "Clicked Me";
    Two.style.color = "green";
})
Three.addEventListener("dblclick",function(){
    Three.textContent = "Double Clicked Me";
    Three.style.color = "red";
})
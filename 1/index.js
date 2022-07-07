function random(colors){
    return Math.floor(Math.random()*colors);
}
function background(){
    const rndl ='rgb('+random(255)+','+random(255)+','+random(255)
    return rndl;
}
let divs =document.querySelectorAll('div');
for(let i=0; i<divs.length;i++){
divs[i].onclick=function(e){
    e.target.style.backgroundColor=background();
}
}

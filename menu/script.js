const nav=document.createElement('div');
const body=document.querySelector('body');
const container=document.createElement('div');





//nav bar

nav.classList.add('nav');
body.append(nav);
nav.innerText='VISUAL ALGO';

//boxes
container.classList.add('container');
body.append(container);

for(var i=1; i<=20;i++){
   const box= document.createElement('div');
    box.setAttribute('id',i);
    box.classList.add('box');
    container.append(box);
}

//code animation
const symbol=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','-','=',';','/','.',',','!','@','#','$','^','&','*','(',')','~','c','d','f','g','h','i','j','k','l','m','t','2','5','7','8','0','[','=','3','d','3','7','4','2','7','9','1','6','0','6','1','5','8','4','2','5','v','7','3','7','4','6','3','4','5','7','8','0'];

//functions
//random symbol
function randomSymbol(symbol){
    let temp=Math.random()*100;
    const random=Math.floor(temp);
    return symbol[random];
}
//random position
function randomPosition(){
    let temp=Math.random()*100+10;
    if(temp>=90){temp-=15;}
    const tempInt=Math.floor(temp);
    return tempInt;
}


//generating elements

for (let i=1; i<=100; i++) {
    task(i);
 }
   
 function task(i) {
   setTimeout(function() {
    const temp=document.createElement('div');
    temp.classList.add('code');
    temp.style.top=`${randomPosition()}%`;
    temp.innerText=randomSymbol(symbol);
    body.append(temp);
   }, 100*i );
 }
 for (let i=1; i<=100; i++) {
    task(i);
 }
   

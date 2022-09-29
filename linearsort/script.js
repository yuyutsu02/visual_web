const container=document.querySelector('.container');
var arr=[10,20,30,40,50,60,70,80,10,20,30,40,50,60,70,80];


for(i=0;i<60;i++){
    arr[i]=Math.random()*50;
}




// iniating elements
for(let i=0;i<arr.length;i++){
const initiate=document.createElement('div');
initiate.setAttribute('id',i);
container.append(initiate);
}

// removes previous elements creats new
function draw(){
for(let i=0;i<arr.length;i++){
    const del=document.getElementById(i);
    container.removeChild(del);
    const temp=document.createElement('div');
    temp.style.height=`${arr[i]}vh`;
    temp.style.top=`${80-arr[i]}vh`;
    temp.classList.add('line');
    temp.setAttribute('id',i);
    container.append(temp);
}
}


 function sorting(){

    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                const temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }

}




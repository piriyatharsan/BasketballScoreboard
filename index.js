let disEl1 = document.getElementById("dis1");
let disEl2 = document.getElementById("dis2");

let count =0;

function add11(){
    count +=1;
    disEl1.textContent =count;
}
function add12(){
    count +=2;
    disEl1.textContent =count;
}
function add13(){
    count +=3;
    disEl1.textContent =count;
}
function add21(){
    count +=1;
    disEl2.textContent =count;
}
function add22(){
    count +=2;
    disEl2.textContent =count;
}
function add23(){
    count +=3;
    disEl2.textContent =count;
}

function reset1(){
    disEl1.textContent=0;
    count=0;
    
}
function reset2(){
    disEl2.textContent=0;
    count=0;
    
}




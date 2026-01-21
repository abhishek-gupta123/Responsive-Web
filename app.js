
let menu = document.querySelector('.menu-div');
let btn = document.querySelector('.icon');


let tbtn = document.querySelector('#themebtn');
let tspan = document.querySelector('#span');

let tdiv = document.querySelector('.theme-div');
menu.style.transition = ".3s"
menu.style.display = "none";

let count1 = 1;
btn.addEventListener('click', () => {


    if (count1 % 2 == 0) {
        menu.style.display = "none";
        // menu.style.width = "0";


    }
    else {
        // menu.style.width = "120px";
        menu.style.display = "flex";
       
    }
    count1++;

});

let count2 = 1;
tbtn.addEventListener('click',()=>{

    if (count2 % 2 == 0) {
        tdiv.style.display = "none";
        tspan.style.transform = "rotate(180deg)"
    }
    else{
        tdiv.style.display = "flex";
        tspan.style.transform = "rotate(90deg)"
    }
    count2++;
});

let tbtn2 = document.querySelector('#theme-btn');
let tspan2 = document.querySelector('.span');

let count3 = 1;
tbtn2.addEventListener('click',()=>{

    if (count3 % 2 == 0) {
        tdiv.style.display = "none";
        tspan2.style.transform = "rotate(180deg)"
    }
    else{
        tdiv.style.display = "flex";
        tspan2.style.transform = "rotate(90deg)"
    }
    count3++;
});

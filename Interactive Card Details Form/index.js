const holdernameE1 = document.querySelector(".holdern");
const nameE1 = document.querySelector(".name");

const cardnE1 = document.querySelector(".cardn");
const numberE1 = document.querySelector(".number");

const expE1 = document.querySelector(".exp");
const monthE1 = document.querySelector(".month");
const yearE1 = document.querySelector(".year");

const cvcE1 = document.querySelector(".cvc");
const cvcMainE1 = document.querySelector(".cvc-m");



const btnmE1 = document.querySelector(".btn");
const btnE1 = document.querySelector(".btn.con");

const activeE1 = document.querySelector(".active");
const formE1 = document.querySelector(".form");



nameE1.addEventListener("keyup", (event)=>{
    text = nameE1.value;
    holdernameE1.innerHTML = text;
})

numberE1.addEventListener("keyup", ()=>{
    numfield();
})

monthE1.addEventListener("keyup", ()=>{
    expE1.innerHTML = monthE1.value + "/" + yearE1.value;
})

yearE1.addEventListener("keyup", ()=>{
    expE1.innerHTML = monthE1.value + "/" + yearE1.value;
})

cvcMainE1.addEventListener("keyup", ()=>{
    cvcE1.innerHTML = cvcMainE1.value;
})


function numfield(){

    value = numberE1.value;
    newvalue = value;

    if(value.length>4 && value.length<=8){
        newvalue = value.slice(0,4) + " " + value.slice(4);
    }
    else if(value.length>8 && value.length<=12){
        newvalue = value.slice(0,4) + " " + value.slice(4,8) + " "+ value.slice(8);
    }
    else if(value.length>12 && value.length<=16){
        newvalue = value.slice(0,4) + " " + value.slice(4,8) + " "+ value.slice(8,12) + " " + value.slice(12);
    }

    cardnE1.innerHTML = newvalue;
}


btnmE1.addEventListener("click", ()=>{
    activeE1.classList.remove("non-visible");
    formE1.classList.add("non-visible");
})


btnE1.addEventListener("click", ()=>{
    formE1.classList.remove("non-visible");
    activeE1.classList.add("non-visible");
})
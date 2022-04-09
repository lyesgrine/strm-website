const navLinks = document.getElementById("navLinks");

var mobileScrean = window.matchMedia("(max-width: 700px)");
mobileScrean.addEventListener("change",e=>{
    if(this.matches){
        navLinks.style.display="none";
    }
})
if(mobileScrean.matches){
    navLinks.style.display="none";
}


var pcScrean = window.matchMedia("(min-width: 701px)").addEventListener("change",e=>{
    if(this.matches){
        navLinks.style.display="";
    }
})
 

function hidemenu(){
    //navLinks.style.right = "-55%"; 
    navLinks.style.right = "-55%";
    setTimeout(()=>{navLinks.style.display="none";},1000); 
}

function showmenu(){
    //navLinks.style.right = "0";
    navLinks.style.display="";
    setTimeout(()=>{navLinks.style.right = "0";},5); 
}



const course1 = document.getElementById("c1");
course1.addEventListener("click",toCourse1);
function toCourse1(){
    window.location.href = "course.html";
}

const course2 = document.getElementById("c2");
course2.addEventListener("click",toCourse2);
function toCourse2(){
    window.location.href = "course.html";
}

const course3 = document.getElementById("c3");
course3.addEventListener("click",toCourse3);
function toCourse3(){
    window.location.href = "course.html";
}
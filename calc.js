let userInput=document.getElementById("input")
userInput.value=0
let expression=""

function click1(num){
    expression=expression+num
    userInput.value=expression
}

function equal(){
    expression=eval(expression)
    userInput.value=expression
}
function erase(){
    expression=""
    userInput.value=expression
}
function them(){
    
    var element1=document.querySelectorAll("table")
    element1.forEach(x=>{
        x.classList.toggle("thtab")
    })
    var element2=document.querySelectorAll("input")
    element2.forEach(x => {
        x.classList.toggle("thinp") 
    });
    var element3=document.querySelectorAll(".op")
    element3.forEach(x=>{
        x.classList.toggle("thop")
        x.classList.toggle("thop:hover")
    })
    var element4=document.querySelectorAll(".horizontal")
    element4.forEach(x=>{
        x.classList.toggle("thhor")
        x.classList.toggle("thhor:hover")
    }) 
}
var element5=document.getElementById("dark")
element5.addEventListener('click', function(e) {
    if ( e.target.innerText == "dark" ){
        e.target.innerText = "light";}
    else{
        e.target.innerText = "dark";
}
    
 });

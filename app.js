let header =document.getElementById("header")

let textChang = document.getElementById("textChang");

let textSizeUp = document.getElementById("textSizeUp");
let textSizeLow = document.getElementById("textSizeLow");
let textColorChang = document.getElementById("textColorChang");
let textChangBg = document.getElementById("textChangBg");

textColorChang.addEventListener("click", function(){color()});
textChangBg.addEventListener("click", function(){background()});
textSizeUp.addEventListener("click" , function(){sizeUp()});
textSizeLow.addEventListener("click" , function(){sizeLow()});




function sizeUp(){
    header.style.fontSize="50px"
}

function sizeLow(){
    header.style.fontSize="20px"
}



function color() {
    header.style.color = "blue";
  }
  function background() {
    header.style.background = "red";
  }





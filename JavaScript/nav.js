function togNav() {
  
  var navi = document.querySelector(".nav");
  var navIcon = document.querySelector(".menuIcon");
  
  if (navi.style.height === "0px" && navi.style.padding === "0px" && navIcon.style.transform === "rotate(0deg)") {
    
    navi.style.height = "200px";
    navi.style.padding = "20px 0px";
    navIcon.style.transform = "rotate(-90deg)";
    
  } else {
    
    navi.style.height = "0px";
    navi.style.padding = "0px"
    navIcon.style.transform = "rotate(0deg)";
  }
  
}
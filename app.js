
// filter popup script START
var handleModify = (e) => {
    var e = e || window.event;
    
    var popup = document.getElementsByClassName('popup-wrapper')[0];
    popup.style.display = popup.style.display == "none" ? "block": "none";
    popup.style.top = (e.y -e.offsetY- 5)+ 'px';
    popup.style.left = (e.x -e.offsetX- 360) +'px';
  }
  
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("navbar-menuItem");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
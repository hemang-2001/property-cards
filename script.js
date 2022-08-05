// filter popup script START
var handleModify = (e) => {
    var e = e || window.event;
    var targ = e.target || e.srcElement;
    
    var popup = document.getElementsByClassName('popup-wrapper')[0];
    popup.style.display = popup.style.display == "none" ? 'block': "none";
    popup.style.top = (e.y -e.offsetY- 17)+ 'px';
    popup.style.left = (e.x-e.offsetX- 270) +'px';
  }
  
  var handlePopupClick = () => {
    var popup = document.getElementsByClassName('popup-wrapper')[0];
    popup.style.display = "none";
  }
  
//   ENDSSS

// NAV BAR START 

var menuItemsCount = 16,
    lastWindowWidth = this.window.innerWidth;
CheckResponsive();

window.addEventListener("resize", function () {
    CheckResponsive();
    lastWindowWidth = this.window.innerWidth;
});

function CheckResponsive() {
    for (var i = 0; i <= menuItemsCount; i++) {

        if (this.window.innerWidth < 1650) {
            var menuItem = document.getElementsByClassName("navbar-menuItem"),
                menuItemWith = menuItem[menuItemsCount].clientWidth,
                navPos = document.querySelector("#navbar-rightSide").getBoundingClientRect().x,
                menuItemPos = menuItem[menuItemsCount].getBoundingClientRect().x + menuItemWith;

            if (lastWindowWidth >= this.window.innerWidth && navPos < menuItemPos) {
                menuItem[menuItemsCount].style = "display: none;";
                menuItemsCount--;
            }
            else if (lastWindowWidth <= this.window.innerWidth && navPos > menuItemPos) {
                menuItemsCount++;
                if (menuItemsCount > 16) menuItemsCount = 16;
                menuItem[menuItemsCount].style = "display: flex";
            }
        }
    }
}


function ShowSearchbar() {
    let searchBox = document.querySelector(".navbar-searchBox");
    searchBox.classList.toggle("hide");
}

// NAV BAR ENDS
  

// Get the container element
var btnContainer = document.getElementById("myDIV");

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
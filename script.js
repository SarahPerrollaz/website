// Custom Cursor

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
mouseCursor.style.top = e.pageY + "px";
mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
     mouseCursor.classList.remove("link-grow");
    });
    link.addEventListener("mouseenter", () => {
     mouseCursor.classList.add("link-grow");
    });
});

// Background Color Change

var leftColor = [, "#C1DAE8", "#C4D9CA", 
      "#EEB3B3", "#E3D7C5", "#FFFFFF", "#FFFFFF"];

var rightColor = [, "#5350EC", "#179275", 
      "#E36235", "#DE9B3B", "#FFFFFF", "#FFFFFF"];

const randomNum = function() { 
  return Math.floor(Math.random() * leftColor.length);
}

const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.style.background = leftColor[randomNum()];

right.style.background = rightColor[randomNum()];

left.addEventListener(
          "mouseenter", function (e) {          left.style.background 
          = leftColor[Math.floor(Math.random() * leftColor.length)];
  })

right.addEventListener(
          "mouseenter", function () {
               
      right.style.background 
          = rightColor[Math.floor(Math.random() * rightColor.length)];
  })



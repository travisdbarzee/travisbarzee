const aboutContainer = document.getElementById("about-me");
const aboutMe = document.getElementById("content");
const plusSign = document.getElementById("plus-sign");
const spanHeader = document.getElementById("span-header");

spanHeader.addEventListener("click", () => {
  function revealContent() {
    aboutContainer.classList.toggle("move-up");
    aboutMe.classList.toggle("reveal");
    plusSign.classList.toggle("rotate");
  }
  revealContent();
});

function activateSlide(evt, slideName) {
  var i, slide, btn;

  slide = document.getElementsByClassName("slide");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
    slide[i].classList.add("reveal-slide");
  }

  btn = document.getElementsByClassName("btn");
  for (i = 0; i < btn.length; i++) {
    btn[i].className = btn[i].className.replace(" active", "");
  }

  document.getElementById(slideName).style.display = "block";
  evt.currentTarget.className += " active";
}



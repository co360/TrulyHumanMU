const menuLinks = document.querySelector(".menuLinks");
const menubtn = document.querySelector(".menubtn");
const categories = document.querySelectorAll(".category");

//toggle categories in and out when clicking menubtn
function toggleMenu(){
    menuLinks.classList.toggle("show")
    menubtn.classList.toggle("closeMenubtn")
};

menubtn.addEventListener("click", toggleMenu);
menubtn.addEventListener("keydown ", toggleMenu)

//toggle when selecting a category
categories.forEach(
    function(category) {
        category.addEventListener("click", toggleMenu)
    }
);

//animating the slideShow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slidePic");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 
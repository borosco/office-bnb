var slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function myFunction() {
    if(weWork.style.display === "none") {
        weWork.style.display = "block";
    } else {
        weWork.style.display = "none";
  
}
}
function myFunction1() {
    var rooms = document.getElementById("card-rooms");
    if(rooms.style.display === "none") {
        rooms.style.display = "block";
    } else {
        rooms.style.display = "none";

    }
    
}
function myFunction2() {
    var kiongozi = document.getElementById("card-kiongozi");
    if(kiongozi.style.display === "none") {
        kiongozi.style.display = "block";
    } else {
        kiongozi.style.display = "none";

    }
    
}
function myFunction3() {
    var workaholic = document.getElementById("card-workaholic");
    if(workaholic.style.display === "none") {
        workaholic.style.display = "block";
    } else {
        workaholic.style.display = "none";

    }

}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
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

function myFunction4() {
    var weWork = document.getElementById("card-wework");
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
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
$("#submitbutton").click(function(){
    var messageHere = (document.getElementById("messagehere").value);
    var name = (document.getElementById("name").value);
    if(messageHere != "") {
    alert(name + " we have received your message. Thank you for reaching out to us.");
  } else {
    alert("Please fill out form before submitting");
  }
  });

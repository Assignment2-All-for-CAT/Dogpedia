// sticky nav bar
$(window).scroll(function () {
  console.log("22");
  if ($(window).scrollTop()) {
    $(".nav-bar").addClass("sticky");
  } else {
    $(".nav-bar").removeClass("sticky");
  }
});

// automatic slides
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = $(".slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

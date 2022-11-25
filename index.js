// sticky nav bar
$(window).scroll(function () {
  console.log("22");
  if ($(window).scrollTop()) {
    $(".nav-bar").addClass("sticky");
  } else {
    $(".nav-bar").removeClass("sticky");
  }
});

// mobile nav bar
$("#mobile-nav").click(function () {
  if ($("#sidebar").hasClass("hidden")) {
    $(".sidebar").removeClass("hidden");
  } else {
    $(".sidebar").addClass("hidden");
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

//pop up box

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelector("#showModal");
const btnCloseModal = document.querySelector(".close-modal");

const showModal = function () {
  console.log("22");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnShowModal.addEventListener("click", showModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

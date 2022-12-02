// sticky nav bar
$(window).scroll(function () {
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

//pop up box

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelector("#showModal");
const btnCloseModal = document.querySelector(".close-modal");

const showModal = function () {
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

// email validation
const newsSubmitBtn = $("#newsSubmit");
const contactSubmitBtn = $("#send");
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
newsSubmitBtn.click(newsEmailValidate);
contactSubmitBtn.click(contactEmailValidate);

function newsEmailValidate(e) {
  e.preventDefault();

  let valid = true;
  // const newsEmail = $("#newsEmail");
  const newsEmail = document.querySelector("#newsEmail").value;
  if (!regex.test(newsEmail)) {
    $("#newsEmailError").text("Please enter a valid email :)");
    valid = false;
  }

  if (valid) {
    $("#newsForm").submit();
  }
}

function contactEmailValidate(e) {
  e.preventDefault();

  let valid = true;
  // const contactEmail = $("#userEmail").value;
  const contactEmail = document.querySelector("#userEmail").value;
  if (!regex.test(contactEmail)) {
    $("#userEmailError").text("Please enter a valid email :)");
    valid = false;
  }
  if (valid) {
    console.log("22");
    $("#contactForm").submit();
    closeModal();
  }
}

//change cat img when screen width<800px

// const screenWidth = document.body.clientWidth;
// for (let i = 1; i < 4; i++) {
//   if (screenWidth < 800) {
//     document.querySelector(`#img${i}`).src = `./Images/catmobile${i}.jpg`;
//   }
// }

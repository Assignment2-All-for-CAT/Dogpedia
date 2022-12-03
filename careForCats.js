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

const contactSubmitBtn = $("#send");
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
contactSubmitBtn.click(contactEmailValidate);

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
    // get data from contact form
    const cForm = document.querySelector("#contactForm");
    const cFormData = new FormData(cForm);
    const cObject = Object.fromEntries(cFormData);
    const cJson = JSON.stringify(cObject);
    console.log(cJson);
    sessionStorage.setItem("cForm", cJson);
    // jump tp thank.html
    window.location.href = "./thank.html";
  }
}

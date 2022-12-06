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
    setTimeout(showSlides, 10000); // Change image every 10 seconds
  }
  
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
      // $("#newsForm").submit();
      const newsletter = document.querySelector("#newsEmail").value;
      sessionStorage.setItem("newsletter", newsletter);
      // jump tp thank.html
      window.location.href = "./thank.html";
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
      // get data from register form
      const cForm = document.querySelector("#contactForm");
      const cFormData = new FormData(cForm);
      const cObject = Object.fromEntries(cFormData);
      const cJson = JSON.stringify(cObject);
      sessionStorage.setItem("cForm", cJson);
      console.log(cJson);
      // jump tp thank.html
      window.location.href = "./thank.html";
    }
  }

    //save the data from the search bar
    document.querySelector('#searchButton').addEventListener('click', function(e){
      e.preventDefault(); 
      let valid = true;
      catName = document.querySelector('#catname');
      if(catName.value === ""){
        valid = false;
      }
      if(valid){
        const sForm = document.querySelector('#searchForm');
        const sFd = new FormData(sForm);
        const sObj = Object.fromEntries(sFd);
        localStorage.setItem('sForm', JSON.stringify(sObj));
        window.location.href = './breeds.html';
      }
    })
    
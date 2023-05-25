$(document).ready(function () {
  const url = `https://api.thedogapi.com/v1/breeds`;
  const api_key = "DEMO_API_KEY";

  var storedBreeds = [];

  fetch(url, {
    headers: {
      "x-api-key": api_key,
    },
  })
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      //filter to only include those with an `image` object
      data = data.filter((img) => img.image?.url != null);

      storedBreeds = data; /* receive all the cats data */

      const json = sessionStorage.getItem("sForm");
      var obj = JSON.parse(json);

      if (obj === null) obj = { catname: "" };
      else {
        var aux = obj.catname;
      }

      console.log(obj);
      if (obj.catname != "") {
        sValue(storedBreeds, aux); //call the function to create the gallery
        sessionStorage.removeItem("KEY");
        sessionStorage.clear();
      } else {
        displayElements(storedBreeds); //call the function to create the gallery
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  function sValue(datas, value) {
    const principal = $("#gallery");
    $(principal).html("");

    let filteredBreeds = [];

    for (let j = 0; j < datas.length; j++) {
      if (datas[j].name.toLowerCase().includes(value)) {
        filteredBreeds.push(j); //save the data accordingly with the search
      }
    }

    displaySearch(filteredBreeds); //call the function to display only the data related to the input
  }

  /* take the input and looking for some match in the data */
  function search() {
    const principal = $("#gallery");
    $(principal).html("");

    aux = $("#search").val();
    let filteredBreeds = [];
    for (let j = 0; j < storedBreeds.length; j++) {
      if (storedBreeds[j].name.toLowerCase().includes(aux)) {
        filteredBreeds.push(j); //save the data accordingly with the search
      }
    }
    displaySearch(filteredBreeds); //call the function to display only the data related to the input
  }

  //function to display the initial gallery
  function displayElements(data) {
    for (let j = 0; j < data.length; j++) {
      const principal = $("#gallery");

      //creating the elements to populate the gallery
      const div = $("<div />", { id: "container" });

      const image = $("<img />", {
        id: "breed_image",
        src: storedBreeds[j].image.url,
      });

      const breedName = $("<h2 />", {
        id: "breed_name",
        class: "show",
        html: storedBreeds[j].name,
      });

      const temperament = $("<p />", {
        id: "temperament",
        class: "show",
        html: storedBreeds[j].temperament,
      });

      const description = $("<p />", {
        id: "description",
        class: "hidden",
        html: storedBreeds[j].description,
      });

      const url = $("<a />", {
        id: "url",
        class: "hidden",
        target: "_blank",
        html: "Learn More",
        href: storedBreeds[j].wikipedia_url,
      });

      const affection = $("<p />", {
        id: "affection",
        class: "hidden",
        html: "Affection Level: ",
      });

      const energy = $("<p />", {
        id: "energy",
        class: "hidden",
        html: "Energy Level: ",
      });

      const dog = $("<p />", {
        id: "dog",
        class: "hidden",
        html: "Dog Friendly: ",
      });

      const stranger = $("<p />", {
        id: "stranger",
        class: "hidden",
        html: "Stranger Friendly: ",
      });

      const intelligence = $("<p />", {
        id: "intelligence",
        class: "hidden",
        html: "Intelligence Level: ",
      });

      for (i = 1; i <= storedBreeds[j].affection_level; i++) {
        $(affection).append("⭐"); //add star accordingly with the data
      }

      for (i = 1; i <= storedBreeds[j].energy_level; i++) {
        $(energy).append("⭐");
      }

      for (i = 1; i <= storedBreeds[j].dog_friendly; i++) {
        $(dog).append("⭐");
      }

      for (i = 1; i <= storedBreeds[j].stranger_friendly; i++) {
        $(stranger).append("⭐");
      }

      for (i = 1; i <= storedBreeds[j].intelligence; i++) {
        $(intelligence).append("⭐");
      }

      //append the elements to container div
      $(div).append(image);
      $(div).append(breedName);
      $(div).append(temperament);
      $(div).append(description);
      $(div).append(affection);
      $(div).append(energy);
      $(div).append(dog);
      $(div).append(stranger);
      $(div).append(intelligence);
      $(div).append(url);

      //append the container div to principal div
      $(principal).append(div);
    }
  }

  //function to display the data after the search
  function displaySearch(data) {
    for (let j = 0; j < data.length; j++) {
      const principal = $("#gallery");

      //creating the elements to populate the gallery
      const div = $("<div />", { id: "container" });

      const image = $("<img />", {
        id: "breed_image",
        src: storedBreeds[data[j]].image.url,
      });

      const breedName = $("<h2 />", {
        id: "breed_name",
        class: "show",
        html: storedBreeds[data[j]].name,
      });

      const temperament = $("<p />", {
        id: "temperament",
        class: "show",
        html: storedBreeds[data[j]].temperament,
      });

      const description = $("<p />", {
        id: "description",
        class: "hidden",
        html: storedBreeds[data[j]].description,
      });

      const url = $("<a />", {
        id: "url",
        class: "hidden",
        target: "_blank",
        html: "Learn More",
        href: storedBreeds[data[j]].wikipedia_url,
      });

      const affection = $("<p />", {
        id: "affection",
        class: "hidden",
        html: "Affection Level: ",
      });

      const energy = $("<p />", {
        id: "energy",
        class: "hidden",
        html: "Energy Level: ",
      });

      const dog = $("<p />", {
        id: "dog",
        class: "hidden",
        html: "Dog Friendly: ",
      });

      const stranger = $("<p />", {
        id: "stranger",
        class: "hidden",
        html: "Stranger Friendly: ",
      });

      const intelligence = $("<p />", {
        id: "intelligence",
        class: "hidden",
        html: "Intelligence Level: ",
      });

      for (i = 1; i <= storedBreeds[data[j]].affection_level; i++) {
        $(affection).append("⭐"); //add star accordingly with the data
      }

      for (i = 1; i <= storedBreeds[data[j]].energy_level; i++) {
        $(energy).append("⭐");
      }

      for (i = 1; i <= storedBreeds[data[j]].dog_friendly; i++) {
        $(dog).append("⭐");
      }

      for (i = 1; i <= storedBreeds[data[j]].stranger_friendly; i++) {
        $(stranger).append("⭐");
      }

      for (i = 1; i <= storedBreeds[data[j]].intelligence; i++) {
        $(intelligence).append("⭐");
      }

      //append the elements to container div
      $(div).append(image);
      $(div).append(breedName);
      $(div).append(temperament);
      $(div).append(description);
      $(div).append(affection);
      $(div).append(energy);
      $(div).append(dog);
      $(div).append(stranger);
      $(div).append(intelligence);
      $(div).append(url);

      //append the container div to principal div
      $(principal).append(div);
    }
  }

  $("#search").on("keyup", search);
});

//pop up contact box
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

// // set the height
// let height = 713.6;
// let footerheight = document.querySelector('footer').offsetHeight;
// let headerheight = document.querySelector('header').offsetHeight;
// let mainheight = document.querySelector('#principal-body').offsetHeight;
// if (height > footerheight + headerheight + mainheight) {
//     let newheight = height - headerheight - mainheight;
//     document.querySelector('#principal-body').style.height = newheight + 'px';
// }
// console.log(height, mainheight, headerheight, footerheight)

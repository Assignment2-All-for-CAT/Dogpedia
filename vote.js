const API_URL = `https://api.thedogapi.com/v1/`;
const API_KEY =
  "live_OLQLaHy30gq7VRz7RPt8nO6l06F7quDfOMqfPV9UP4PnTPm3JPfvktXnhPTX4tuY";

let id = "";
let currentImageToVoteOn;

function showVoteOptions() {
  document.getElementById("grid").innerHTML = "";

  document.getElementById("vote-options").style.display = "block";
  document.getElementById("vote-results").style.display = "none";
  document.getElementById("inner-container").style.display = "flex";

  showImageToVoteOn();
}

function showImageToVoteOn() {
  const url = `${API_URL}images/search`;

  fetch(url, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      currentImageToVoteOn = data[0];
      document.getElementById("image-to-vote-on").src =
        currentImageToVoteOn.url;

      let img = document.getElementById("image-to-vote-on");
      if (img.style.height >= img.style.width) {
        img.style.height = "-webkit-fill-available";
        img.style.width = "auto";
      } else {
        img.style.width = "-webkit-fill-available";
        img.style.height = "auto";
      }
    });
}

function vote(value) {
  const url = `${API_URL}votes/`;
  const body = {
    image_id: currentImageToVoteOn.id,
    value,
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      "x-api-key": API_KEY,
    },
  }).then((response) => {
    showVoteOptions();
  });
}

function showHistoricVotes() {
  document.getElementById("vote-options").style.display = "none";
  document.getElementById("vote-results").style.display = "block";
  document.getElementById("inner-container").style.display = "none";

  const url = `${API_URL}votes?limit=12&order=DESC`;

  fetch(url, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map(function (voteData) {
        const imageData = voteData.image;
        let a = document.createElement("a");
        let image = document.createElement("img");
        image.setAttribute("class", "display");
        //use the url from the image object
        a.setAttribute("href", imageData.url);
        image.src = imageData.url;

        let gridCell = document.createElement("div");

        if (voteData.value < 0) {
          gridCell.classList.add("red");
        } else {
          gridCell.classList.add("green");
        }

        gridCell.classList.add("col-lg2");

        a.appendChild(image);
        gridCell.appendChild(a);

        document.getElementById("grid").appendChild(gridCell);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

showVoteOptions();

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

// mobile nav bar
$("#mobile-nav").click(function () {
  if ($("#sidebar").hasClass("hidden")) {
    $(".sidebar").removeClass("hidden");
  } else {
    $(".sidebar").addClass("hidden");
  }
});

// newsletter subscription feedback
try {
  const newsletter = sessionStorage.getItem("newsletter");
  const user = document.querySelector("#user");
  user.textContent = `${newsletter}: `;
  let message = document.querySelector("#message");
  message.textContent = "Thanks for your subscription! Glad to have you :)";
} catch (e) {}

// contact feekback from home page
try {
  const cForm = JSON.parse(sessionStorage.getItem("cForm"));
  user.textContent = cForm["userName"];
  message.textContent = `We've got your message. Thanks for your contact!`;
} catch (e) {}

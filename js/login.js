//Capturing elements from HTML

const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const messageBox = document.querySelector("#message");
const loginButton = document.querySelector("#login-button");

//Capturing Events and making some validations

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();

  const errorLogin = validateValues(email, password);

  if (errorLogin) {
    messageBox.classList.remove("hidden");
    messageBox.classList.add("error");
    messageBox.innerText = errorLogin;
  } else {
    messageBox.classList.remove("error");
    messageBox.classList.add("hidden");
    loginButton.classList.remove("learn-more");
    loginButton.classList.add("success");
    setTimeout(() => {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      window.location.href = "/pages/kanban.html";
    }, 1000);
  }
});

//Validating fields

const validateValues = function (email, password) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

  if (!email || !emailRegex.test(email)) {
    return (messageBox.innerText = "Please, enter a valid e-mail.");
  }

  if (!password || !passwordRegex.test(password)) {
    return (messageBox.innerText =
      "The Password must contain: 1 capital letter, 1 letter, 1 number and 1 special character.");
  }

  return null;
};

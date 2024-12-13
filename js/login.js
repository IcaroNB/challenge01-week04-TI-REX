//Capturing elements from HTML

const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("password");

//Validating fields

const validateValues = function (email, password) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

  if (!email || !emailRegex.test(email)) {
    return (messageBox.innerText = "Please, enter a valid e-mail.");
  }

  if (!password || !passwordRegex.test(password)) {
    return (messageBox.innerText =
      "Please, inform a valid name. Must contain only letters and spaces.");
  }

  return null;
};

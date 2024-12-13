// Capturing the HTML Elements and their values

const subscribeForm = document.getElementById("subscribeForm");
const subscribeEmail = document.getElementById("subscribeEmail");
const subscribeName = document.getElementById("subscribeName");
const messageBox = document.getElementById("message");

// Capturing events

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const bruteEmail = subscribeEmail.value;
  const email = bruteEmail.trim();

  const bruteName = subscribeName.value;
  const name = bruteName.trim();

  messageBox.classList = "hidden";
  messageBox.innerText = "";

  const errorMessage = validateValues(email, name);

  if (errorMessage) {
    messageBox.classList.remove("hidden");
    messageBox.classList.add("error");
    messageBox.innerText = errorMessage;
  } else {
    messageBox.classList.remove("error");
    messageBox.classList.add("hidden");

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);

    window.location.href = "/pages/login.html";
  }
});

// Validating received values

const validateValues = function (email, name) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

  if (!email || !emailRegex.test(email)) {
    return (messageBox.innerText = "Please, enter a valid e-mail.");
  }

  if (!name || !nameRegex.test(name)) {
    return (messageBox.innerText =
      "Please, inform a valid name. Must contain only letters and spaces.");
  }

  return null;
};

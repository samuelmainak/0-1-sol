
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) {
    // Send form data to server or perform other actions here
    alert("Form submitted successfully!");
    form.reset();
  }
});

function validateForm() {
  let valid = true;

  // Validate name field
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    valid = false;
  } else {
    nameInput.classList.remove("error");
  }

  // Validate email field
  if (emailInput.value === "") {
    emailInput.classList.add("error");
    valid = false;
  } else {
    emailInput.classList.remove("error");
  }

  // Validate message field
  if (messageInput.value === "") {
    messageInput.classList.add("error");
    valid = false;
  } else {
    messageInput.classList.remove("error");
  }

  return valid;
}



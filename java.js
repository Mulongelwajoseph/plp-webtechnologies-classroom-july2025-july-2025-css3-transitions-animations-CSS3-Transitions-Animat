/****************************************************
 PART 1: Event Handling
****************************************************/
// Click event
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "Button was clicked!";
});

// Keyboard input event
const nameInput = document.getElementById("nameInput");
const nameFeedback = document.getElementById("nameFeedback");

nameInput.addEventListener("keyup", () => {
  nameFeedback.textContent = `Hello, ${nameInput.value}!`;
});

/****************************************************
 PART 2: Interactive Elements
****************************************************/
// Light/Dark Mode
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countValue = document.getElementById("countValue");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countValue.textContent = count;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

/****************************************************
 PART 3: Form Validation
****************************************************/
const signupForm = document.getElementById("signupForm");
const nameField = document.getElementById("formName");
const emailField = document.getElementById("formEmail");
const passwordField = document.getElementById("formPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Name validation
  if (nameField.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation with regex
  const emailPattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;
  if (!emailField.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (passwordField.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (valid) {
    formSuccess.textContent = "Form submitted successfully! 🎉";
    signupForm.reset();
  }
});
/****************************************************
 END OF FILE
****************************************************/ 
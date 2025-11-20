document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const successMessage = document.getElementById("success-message");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  const clearError = (element) => {
    element.textContent = "";
  };

  const validateName = (nameValue) => {
    if (nameValue.trim() === "") {
      nameError.textContent = "Name is required.";
      return false;
    }
    clearError(nameError);
    return true;
  };

  const validateEmail = (emailValue) => {
    const emailRegex = /.+@.+\..+/;
    if (emailValue.trim() === "") {
      emailError.textContent = "Email is required.";
      return false;
    }
    if (!emailRegex.test(emailValue)) {
      emailError.textContent = 'Email must contain "@" and a domain.';
      return false;
    }
    clearError(emailError);
    return true;
  };

  const validatePassword = (passwordValue) => {
    if (passwordValue.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      return false;
    }
    clearError(passwordError);
    return true;
  };

  const validateForm = () => {
    const isNameValid = validateName(nameInput.value);
    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);

    return isNameValid && isEmailValid && isPasswordValid;
  };

  const handleSubmit = (e) => {
    const isValid = validateForm();

    if (!isValid) {
      e.preventDefault();
      successMessage.style.display = "none";
    } else {
      e.preventDefault();
      form.style.display = "none";
      successMessage.style.display = "block";
    }
  };

  const handleLiveInput = (e) => {
    const target = e.target;

    if (target === nameInput) {
      validateName(target.value);
    } else if (target === emailInput) {
      validateEmail(target.value);
    } else if (target === passwordInput) {
      validatePassword(target.value);
    }
  };

  form.addEventListener("submit", handleSubmit);

  form.addEventListener("input", handleLiveInput);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("multi-step-form");
  const steps = [
    document.getElementById("step-1"),
    document.getElementById("step-2"),
    document.getElementById("step-3"),
    document.getElementById("step-summary"),
  ];
  let currentStepIndex = 0;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  const validateStep = (stepIndex) => {
    let isValid = true;

    if (stepIndex === 0) {
      const nameValue = nameInput.value.trim();
      if (nameValue.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        isValid = false;
      } else {
        nameError.textContent = "";
      }
    } else if (stepIndex === 1) {
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      } else {
        emailError.textContent = "";
      }
    } else if (stepIndex === 2) {
      const passwordValue = passwordInput.value;
      if (passwordValue.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
      } else {
        passwordError.textContent = "";
      }
    }

    return isValid;
  };

  const showStep = (index) => {
    steps.forEach((step, i) => {
      step.classList.remove("active");
      if (i === index) {
        step.classList.add("active");
      }
    });
    currentStepIndex = index;
  };

  const nextStep = () => {
    if (validateStep(currentStepIndex)) {
      if (currentStepIndex < steps.length - 2) {
        showStep(currentStepIndex + 1);
      } else if (currentStepIndex === steps.length - 2) {
        showSummary();
      }
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      showStep(currentStepIndex - 1);
    }
  };

  const showSummary = () => {
    document.getElementById("summary-name").textContent =
      nameInput.value.trim();
    document.getElementById("summary-email").textContent =
      emailInput.value.trim();
    showStep(steps.length - 1);
  };

  form.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-next")) {
      nextStep();
    } else if (e.target.classList.contains("btn-back")) {
      prevStep();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showSummary();
  });

  showStep(0);
});

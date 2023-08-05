const textFields = document.querySelectorAll("[type = 'text']");

const submitButton = document.querySelector("#submit-area button");

const form = document.querySelector("form");



submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(canSubmit()){
        form.submit();
    }
});


form.addEventListener("input", function(event) {
    const inputField = event.target;
    const inputValue = inputField.value;
    const inputType = inputField.getAttribute("type");
  
    switch (inputType) {
      case "text":
        // Validate text fields (first name and last name)
        if (inputValue.length >= 3 && inputValue.length <= 10) {
          clearError(inputField);

        } else {
          showError(inputField, "Field should be 3 to 10 characters long.");
        }
        break;
  
      case "email":
        // Validate email field
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
          clearError(inputField);
        } else {
          showError(inputField, "Invalid email format.");
        }
        break;
  
      case "tel":
        // Validate phone number field
        if (inputValue.match(/^01[0|2|5]\d{8}$/)) {
          clearError(inputField);
        } else {
          showError(inputField, "Invalid phone number format.");
        }
        break;
  
        case "password":
            // Validation for password field
            if (inputValue.length === 8) {
                clearError(inputField);
            } else {
                showError(inputField, "Password should be at least 8 characters long.");
            }

            // Check confirm password field
            const confirmPasswordField = document.getElementById("confirmPassword");
            const passwordField = document.getElementById("password");
            const confirmPasswordValue = confirmPasswordField.value;
            const passwordValue = passwordField.value;
            if (confirmPasswordValue !== passwordValue) {
                clearError(confirmPasswordField);
                showError(confirmPasswordField, "Passwords do not match.");
            } else {
                clearError(confirmPasswordField);
            }
            break;
    }
  });

  
function showError(inputField, errorMessage) {
    const errorBox = inputField.nextElementSibling;
    errorBox.textContent = errorMessage;
    errorBox.style.opacity = "1";
}
  
function clearError(inputField) {
    const errorBox = inputField.nextElementSibling;
    errorBox.style.opacity = "0";
}

function canSubmit() {
  const firstNameField = document.getElementById("firstName");
  const lastNameField = document.getElementById("lastName");
  const emailField = document.getElementById("email");
  const phoneNumberField = document.getElementById("phoneNumber");
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmPassword");

  // Check if each field passes its respective validation
  const isFirstNameValid = firstNameField.value.length >= 3 && firstNameField.value.length <= 10;
  const isLastNameValid = lastNameField.value.length >= 3 && lastNameField.value.length <= 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value);
  const isPhoneNumberValid = phoneNumberField.value.match(/^01[0|2|5]\d{8}$/);
  const isPasswordValid = passwordField.value.length >= 8;
  const doPasswordsMatch = passwordField.value === confirmPasswordField.value;

  // Display errors for invalid fields
  if (!isFirstNameValid) {
    showError(firstNameField, "Field should be 3 to 10 characters long.");
  } else {
    clearError(firstNameField);
  }

  if (!isLastNameValid) {
    showError(lastNameField, "Field should be 3 to 10 characters long.");
  } else {
    clearError(lastNameField);
  }

  if (!isEmailValid) {
    showError(emailField, "Invalid email format.");
  } else {
    clearError(emailField);
  }

  if (!isPhoneNumberValid) {
    showError(phoneNumberField, "Invalid phone number format.");
  } else {
    clearError(phoneNumberField);
  }

  if (!isPasswordValid) {
    showError(passwordField, "Password should be at least 8 characters long.");
  } else {
    clearError(passwordField);
  }

  if (!doPasswordsMatch) {
    showError(confirmPasswordField, "Passwords do not match.");
  } else {
    clearError(confirmPasswordField);
  }

  // Return true only if all fields pass their respective validations
  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPhoneNumberValid &&
    isPasswordValid &&
    doPasswordsMatch
  );
}

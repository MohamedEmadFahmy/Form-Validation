const textFields = document.querySelectorAll("[type = 'text']");

const submitButton = document.querySelector("#submit-area button");

const form = document.querySelector("form");


// console.log(submitButton);

let canSubmit = false;

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(canSubmit){
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
                showError(inputField, "Password should be 8 characters long.");
            }

            // Check confirm password field
            const confirmPasswordValue = confirmPasswordField.value;
            const passwordValue = confirmPasswordField.value;
            if (confirmPasswordValue !== inputValue) {
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

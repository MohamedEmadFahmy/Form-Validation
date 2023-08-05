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


textFields.forEach((field) => {
    field.addEventListener("input", (event) => {
      const inputValue = event.target.value;
      const isValid = validateInput(inputValue); 
  
      if (!isValid) {
        let errorBox = field.nextElementSibling;
        errorBox.style.opacity = "1";
      } else {
        let errorBox = field.nextElementSibling;
        errorBox.style.opacity = "0";
      }
    });
  });
  


  function validateInput(inputValue) {

    return inputValue.length >= 3 && inputValue.length <= 10;
  }

function checkPasswordStrength(password) {
    const noteElement = document.getElementById("pass-note");
  
    if (password.length === 0) {
      noteElement.textContent = "";
      noteElement.className = "pass-note";
    } else if (password.length < 6) {
      noteElement.textContent = "Weak password";
      noteElement.className = "note weak";
    } else if (password.length < 10) {
      noteElement.textContent = "Moderate password";
      noteElement.className = "note moderate";
    } else {
      noteElement.textContent = "Strong password";
      noteElement.className = "note strong";
    }
  }

  function validateEmail(email) {
    const noteElement = document.getElementById("email-validation-note");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email === "") {
      noteElement.textContent = " ";
      noteElement.className = "email-note";
    } else if (!emailRegex.test(email)) {
      noteElement.textContent = "Invalid email address";
      noteElement.className = "note invalid";
    } else {
      noteElement.textContent = " ";
      noteElement.className = "note valid";
    }
  }
  
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("input", function() {
    validateEmail(this.value);
    
    const noteElement = document.getElementById("email-validation-note");
    noteElement.classList.remove("hidden");
  });
  
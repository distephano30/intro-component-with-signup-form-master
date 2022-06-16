// get the inputs and form
const form = document.querySelector(".myForm");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  // getting error
  const errorFirstName = document.getElementById("errorFirstName");
  const errorLastName = document.getElementById("errorLastName");
  const errorEmail = document.getElementById("errorMail");
  const errorPassword = document.getElementById("errorPass");

  if (firstNameValue === "") {
    errorFirstName.innerHTML = "First Name cannot be empty";
  } else {
    errorFirstName.innerHTML = "";
  }
  if (lastNameValue === "") {
    errorLastName.innerHTML = "Last Name cannot be empty";
  } else {
    errorLastName.innerHTML = "";
  }
  if (emailValue === "") {
    errorEmail.innerHTML = "Email cannot be empty";
  } else if (!mailValidation(emailValue)) {
    errorEmail.innerHTML = "Looks like your emai is not valid";
  } else {
    errorEmail.innerHTML = "";
  }
  if (passwordValue === "") {
    errorPassword.innerHTML = "Password cannot be empty";
  } else {
    errorPassword.innerHTML = "";
  }
}

function mailValidation(email) {
  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  );

  return emailRegexp.test(email);
}

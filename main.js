document.addEventListener('DOMContentLoaded', function() {
  const username=document.querySelector('#username');
  const form = document.querySelector('#form');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const cpassword = document.querySelector('#cpassword');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const usernameval=username.value.trim();
  const emailval = email.value.trim();
  const passwordval = password.value.trim();
  const cpasswordval = cpassword.value.trim();
  if(usernameval==''){
    seterror(username,'name is reqired')
  }
  else{
    setsuccess(username);
  }
  if (emailval === '') {
    seterror(email, 'Email is required');
  } else if (!validateEmail(emailval)) {
    seterror(email, "Please enter a valid email");
  } else {
    setsuccess(email);
  }

  if (passwordval === '') {
    seterror(password, 'Password is required');
  } else if (passwordval.length < 8) {
    seterror(password, 'Password must be at least 8 characters');
  } else {
    setsuccess(password);
  }

  if (cpasswordval === '') {
    seterror(cpassword, 'Confirm password is required');
  } else if (cpasswordval !== passwordval) {
    seterror(cpassword, 'Passwords do not match');
  } else {
    setsuccess(cpassword);
  }
}

function seterror(element, message) {
  const data = element.parentElement;
  const errorelement = data.querySelector('.error');

  errorelement.innerText = message;
  data.classList.add('error');
  data.classList.remove('sucess');
}

function setsuccess(element) {
  const data = element.parentElement;
  const errorelement = data.querySelector('.error');

  errorelement.innerText = '';
  data.classList.add('sucess');
  data.classList.remove('error');
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    );
};
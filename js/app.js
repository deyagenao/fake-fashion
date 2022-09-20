// Registration Form Element Variables 
const registrationForm = document.getElementById('register');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitAccountBtn = document.getElementById('submit-acc-btn');

const formElements = [firstName, lastName, email, password, confirmPassword];

// Registration Validation Functions 
const validateEmail = (email) =>{
  const re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return re.test(email.toLowerCase());
}

const validateRegistration = () => {
  const firstNameVal = firstName.value.trim(); 
  const lastNameVal = lastName.value.trim(); 
  const emailVal = email.value.trim(); 
  const passwordVal = password.value.trim(); 
  const cPasswordVal = confirmPassword.value.trim(); 

  if(firstNameVal === ''){
    setError(firstName, 'Please enter your first name.')
  }else{
    setSuccess(firstName);
  }

  if(lastNameVal === ''){
    setError(lastName, 'Please enter your last name.')
  }else{
    setSuccess(lastName);
  }

  if(emailVal === ''){
    setError(email, 'Please enter your email address.')
  }else if(!validateEmail(emailVal)){
    setError(email, 'Please enter a valid email address.')
  }else{
    setSuccess(email);
  }

  if(passwordVal === ''){
    setError(password, 'Please enter a password.')
  }else if(passwordVal.length < 8){
    setError(password, 'Password should have at least 8 characters.')
  }else{
    setSuccess(password);
  }

  if(cPasswordVal === ''){
    setError(confirmPassword, 'Please confirm your password.')
  }else if(cPasswordVal != passwordVal){
    setError(confirmPassword, 'Passwords do not match.')
  }else{
    setSuccess(confirmPassword);
  }
}

const setError = (element, message) => {
  element.classList.remove('success');
  element.classList.add('error');
  const errorDiv = document.createElement('div');
  errorDiv.textContent = message;
  element.nextElementSibling.append(errorDiv);
}

const setSuccess = (element) => {
  element.classList.remove('error');
  element.classList.add('success');
}

const checkAllAreValid = (elementArr) => {
  let isValid = false;
  for(element of elementArr){
    if(element.classList.contains('error')){
      isValid = false;
    } else{
      isValid = true;
    }
  }
  if(isValid) {
    window.location.replace('index.html');
  }
}

// Registration Event Listener
submitAccountBtn.addEventListener('click', (event)=>{
  event.preventDefault();
  validateRegistration();
  checkAllAreValid(formElements);
})


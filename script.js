// form validation
const form = document.querySelector('.form');
const submitButton = form.querySelector('button');
const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const errorName = document.querySelector('.error-fname');
const errorSurname = document.querySelector('.error-lname');
const errorEmail = document.querySelector('.error-email');

//Error Icons
const errorPassword = document.querySelector('.error-password');
const iconErrorName = document.querySelector('.icon-errorName');
const iconErrorLname = document.querySelector('.icon-errorLname');
const iconErrorEmail = document.querySelector('.icon-errorEmail');
const iconErrorPass = document.querySelector('.icon-errorPass');

form.addEventListener('submit', function(e){
  e.preventDefault();
  if(fName.value==""||fName.value==null){
    errorName.innerText="First Name cannot be empty";
    fName.style.borderColor="var(--Red)";
    iconErrorName.style.display="block";
  }else{
   errorName.innerText="";
    fName.style.borderColor="var(--Grayish-Blue)";
    iconErrorName.style.display="none"
  }
  
  if(lName.value==""||lName.value==null){
    errorSurname.innerText="Last Name cannot be empty";
    lName.style.borderColor="var(--Red)";
    iconErrorLname.style.display="block";
  }else{
   errorSurname.innerText="";
    lName.style.borderColor="var(--Grayish-Blue)";
    iconErrorLname.style.display="none";
  }
  
  if(email.value==""||email.value=="null"){
    errorEmail.innerText="Looks like this is not an email";
    email.style.borderColor="var(--Red)";
    iconErrorEmail.style.display="block";
  }else if(email.value.indexOf("@")==-1){
    errorEmail.innerText="Email must include an @";
  }else{
   errorEmail.innerText="";
    email.style.borderColor="var(--Grayish-Blue)";
    iconErrorEmail.style.display="none";
  }
  
if(password.value==""||password.value==null){
    errorPassword.innerText="Password cannot be empty";
    password.style.borderColor="var(--Red)";
    iconErrorPass.style.display="block";
  } else if(password.value.length <=6){
    errorPassword.innerText="Password must be longer than 6 characters";
  }else{
    errorPassword.innerText="";
    password.style.borderColor="var(--Grayish-Blue)";
    iconErrorPass.style.display="none";
  }
})
//validation ends here
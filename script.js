const form = document.querySelector("form");
const email = document.getElementById("mail");
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('passwordconfirm');
const error = document.getElementsByClassName("error");



// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const zipcodeRegExp = /^\d{5}-?\d{3}$/;
const senhaRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
const countryRegExp = /[a-zA-Z]{2,}/;

window.addEventListener("load", () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed email address.
 
});

// This defines what happens when the user types in the field
email.addEventListener("blur", (e) => {
  if (emailRegExp.test(email.value)){
    error[0].innerHTML="";
    email.style.cssText= "border: 2px solid green"; 
  }else{
    error[0].innerHTML= "Entre com um email válido";
    email.style.cssText= "border: 2px solid red"; 

  }
});

country.addEventListener("blur", (e) => {
    if (countryRegExp.test(country.value)){
      error[1].innerHTML="";
      country.style.cssText= "border: 2px solid green"; 
    }else{
      error[1].innerHTML= "Entre com um país válido";
      country.style.cssText= "border: 2px solid red"; 
  
    }
  });

  zipcode.addEventListener("blur", (e) => {
    if (zipcodeRegExp.test(zipcode.value)){
      error[2].innerHTML="";
      zipcode.style.cssText= "border: 2px solid green"; 
    }else{
      error[2].innerHTML= "Entre com um zipcode válido";
      zipcode.style.cssText= "border: 2px solid red"; 
  
    }
  });

  password.addEventListener("blur", (e) => {
    if (senhaRegExp.test(password.value)){
      error[3].innerHTML="";
      password.style.cssText= "border: 2px solid green"; 
    }else{
      error[3].innerHTML= "Entre com uma senha válida";
      password.style.cssText= "border: 2px solid red"; 
  
    }
  });

  confirmpassword.addEventListener("blur", (e) => {
    if (confirmpassword.value===password.value){
      error[4].innerHTML="";
      confirmpassword.style.cssText= "border: 2px solid green"; 
    }else{
      error[4].innerHTML= "Confirmação de password incorreta";
      confirmpassword.style.cssText= "border: 2px solid red"; 
  
    }
  });

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
  event.preventDefault();
    if(confirmpassword.value===password.value && senhaRegExp.test(password.value) && zipcodeRegExp.test(zipcode.value)
     && countryRegExp.test(country.value) && emailRegExp.test(email.value)){
        alert("Congratulations");
     }
  
});
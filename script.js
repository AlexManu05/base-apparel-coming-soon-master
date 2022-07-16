const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailValue = email.value;

  if(!ValidateEmail(emailValue)){
    form.classList.add('error')
    
  }
  else {
    form.classList.remove('error')
    
  }
})



function ValidateEmail(mail) {

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

return validRegex.test(String(email).toLowerCase())

}
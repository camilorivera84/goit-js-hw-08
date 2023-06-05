import _ from 'lodash';
const convertJSONBtn = document.querySelector('.feedback-form');
const form = document.querySelector('.feedback-form');
function sendForm(event) {
  event.preventDefault();

  const formData = {
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email.value = '';
  formData.message.value = '';
}

function saveData() {
  const formData = {
    email: form.querySelector('input[name="email"]').value,
    message: form.querySelector('textarea[name="message"]').value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

//funcion para almacenar los datos con la informacion localmente
function fillFormFromLocalStorage() {
  const saveForm = localStorage.getItem('feedback-form-state');
  if (saveForm) {
    const formData = JSON.parse(saveForm);
    formData.email = form.querySelector('input[name="email"]').value;
    formData.message = form.querySelector('textarea[name="message"]').value;
  }
}

form.addEventListener('input', _.throttle(saveData, 500));
document.addEventListener('DOMContentLoaded', fillFormFromLocalStorage);
form.addEventListener('submit', sendForm);

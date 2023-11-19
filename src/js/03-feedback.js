import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormData = () => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadFormData = () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const formData = JSON.parse(savedData);
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  };

  emailInput.addEventListener('input', () => {
    saveFormData();
  });
  
  messageInput.addEventListener('input', () => {
    saveFormData();
  });

  loadFormData(); 

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));

    console.log(formData);

    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem('feedback-form-state');
  });

  const throttledSaveFormData = throttle(saveFormData, 500);
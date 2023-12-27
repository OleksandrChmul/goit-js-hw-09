document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);

    if (email !== undefined) {
      emailInput.value = email;
    }
    if (message !== undefined) {
      messageInput.value = message;
    }
  }

  document
    .querySelector('.feedback-form')
    .addEventListener('input', function (event) {
      if (event.target === emailInput || event.target === messageInput) {
        const formData = {
          email: emailInput.value.trim(),
          message: messageInput.value.trim(),
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
      }
    });

  document
    .querySelector('.feedback-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const emailValue = emailInput.value.trim();
      const messageValue = messageInput.value.trim();

      if (emailValue && messageValue) {
        console.log({
          email: emailValue,
          message: messageValue,
        });

        localStorage.removeItem('feedback-form-state');
        emailInput.value = '';
        messageInput.value = '';
      }
    });
});

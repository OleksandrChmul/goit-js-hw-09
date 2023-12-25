document.addEventListener('DOMContentLoaded', function () {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);

    if (email !== undefined) {
      document.querySelector('input[name="email"]').value = email;
    }
    if (message !== undefined) {
      document.querySelector('textarea[name="message"]').value = message;
    }
  }

  document
    .querySelector('.feedback-form')
    .addEventListener('input', function (event) {
      if (
        event.target.tagName === 'INPUT' ||
        event.target.tagName === 'TEXTAREA'
      ) {
        const formData = {
          email: document.querySelector('input[name="email"]').value.trim(),
          message: document
            .querySelector('textarea[name="message"]')
            .value.trim(),
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
      }
    });

  document
    .querySelector('.feedback-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const emailValue = document
        .querySelector('input[name="email"]')
        .value.trim();
      const messageValue = document
        .querySelector('textarea[name="message"]')
        .value.trim();

      if (emailValue && messageValue) {
        console.log({
          email: emailValue,
          message: messageValue,
        });

        localStorage.removeItem('feedback-form-state');
        document.querySelector('input[name="email"]').value = '';
        document.querySelector('textarea[name="message"]').value = '';
      }
    });

  document
    .querySelector('.feedback-form')
    .addEventListener('input', function (event) {
      const formData = {
        email: document.querySelector('input[name="email"]').value.trim(),
        message: document
          .querySelector('textarea[name="message"]')
          .value.trim(),
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });
});

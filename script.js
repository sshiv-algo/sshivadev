// script.js
// Navigation scroll background
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

//   form handling:
const form = document.getElementById('contactForm');

form.addEventListener('submit', e => {
  e.preventDefault(); //  Stop default submission!

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      throw new Error('Form failed');
    }
  })
  .catch(error => {
    alert("Something went wrong!");
    console.error(error);
  });
});

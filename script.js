// script.js

// NAV SCROLL COLOR
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// FORM SUBMIT HANDLER
const form = document.getElementById('contactForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  //  Use FormData — not JSON
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
    // No need for headers here — FormData handles it
  })
  .then(response => {
    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    alert("Something went wrong!");
    console.error(error);
  });
});

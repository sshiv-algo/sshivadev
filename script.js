// script.js
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  const form = document.getElementById('contactForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(form.action, {
    method: 'POST',
    body: JSON.stringify({
      first_name: form.first_name.value,
      full_name: form.full_name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(error => {
    alert("Something went wrong!");
    console.error(error);
  });
});

});

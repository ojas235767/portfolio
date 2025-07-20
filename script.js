// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Oracle form submission
const form = document.getElementById("oracle-form");
const responseBox = document.getElementById("oracle-response");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("seeker-name").value.trim();
  const email = document.getElementById("seeker-email").value.trim();
  const message = document.getElementById("seeker-message").value.trim();

  if (name && email && message) {
    responseBox.textContent = "🔮 The Oracle has received your message. Await your prophecy.";
    responseBox.style.color = "#90ee90";
    form.reset();
  } else {
    responseBox.textContent = "⚠️ Please complete all fields to summon the Oracle.";
    responseBox.style.color = "#ff6666";
  }
});

// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});

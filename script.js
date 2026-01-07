const signupCard = document.querySelector('.card');
const successCard = document.getElementById('successCard');
const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const confirmedEmail = document.getElementById('confirmedEmail');
const dismissBtn = document.getElementById('dismissBtn');

successCard.style.display = 'none';

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

newsletterForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  emailInput.classList.remove('error');
  emailError.style.display = 'none';

  if (!email) {
    emailError.textContent = 'Email is required';
    emailError.style.display = 'block';
    emailInput.classList.add('error');
    emailInput.focus();
    return;
  }

  if (!validateEmail(email)) {
    emailError.textContent = 'Valid email required';
    emailError.style.display = 'block';
    emailInput.classList.add('error');
    emailInput.focus();
    return;
  }

  confirmedEmail.textContent = email;

  signupCard.style.display = 'none';
  successCard.style.display = 'block';

  successCard.style.animation = 'fadeIn 0.6s ease-out';
});

dismissBtn.addEventListener('click', function () {
  successCard.style.display = 'none';
  signupCard.style.display = 'flex';

  newsletterForm.reset();
  emailInput.classList.remove('error');
  emailError.style.display = 'none';
});

emailInput.addEventListener('input', function () {
  const email = emailInput.value.trim();

  if (email && !validateEmail(email)) {
    emailError.textContent = 'Valid email required';
    emailError.style.display = 'block';
    emailInput.classList.add('error');
  } else {
    emailError.style.display = 'none';
    emailInput.classList.remove('error');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  signupCard.style.animation = 'fadeIn 0.6s ease-out';
});

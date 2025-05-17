// Burger Menu Toggle
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Handle Reservation Form Submission
const reservationForm = document.getElementById('reservation-form');

reservationForm?.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload on form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('Members').value;

  // Display an alert with the reservation details
  alert(`Reservation successful!\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nMembers: ${guests}`);

  // Reset the form after submission
  reservationForm.reset();
});

// Handle Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload on form submission

  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;

  // Display an alert with the contact details
  alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  // Reset the form after submission
  contactForm.reset();
});

function refresh() {
  location.reload();
}

// Handle Buy Now Button Clicks
document.addEventListener('DOMContentLoaded', function () {
  const buyNowButtons = document.querySelectorAll('.buy-now');

  buyNowButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const productCard = button.closest('.product-card');
      const productName = productCard.querySelector('.product-name').textContent;
      const productPrice = productCard.querySelector('.product-price').textContent.replace('Rs ', '');
      const productImg = productCard.querySelector('img')?.src || '';

      // Store product details in localStorage for later use
      localStorage.setItem('productName', productName);
      localStorage.setItem('productPrice', productPrice);
      localStorage.setItem('productImg', productImg);

      // Redirect to checkout page
      window.location.href = 'checkout.html';
    });
  });
});

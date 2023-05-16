// Get the contact form element
const contactForm = document.getElementById('contact-form');

// Get the success message element
const successMessage = document.getElementById('success-message');

// Handle form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Perform form validation
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  // Simulate form submission
  // You can replace this with your own server-side code for handling form submission
  setTimeout(function() {
    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Show the success message
    successMessage.classList.remove('hidden');
  }, 1000);
});

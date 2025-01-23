document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");
  
    cartButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Item added to cart!");
      });
    });
  
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting us!");
      contactForm.reset();
    });
  });
  
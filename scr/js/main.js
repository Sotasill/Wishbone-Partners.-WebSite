const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const backdrop = document.getElementById("backdrop");

// Function to close the modal and hide the backdrop
function closeModal() {
  mobileMenu.classList.remove("active");
  backdrop.classList.remove("active");
}

// Toggle the modal and backdrop on burger button click
burgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  backdrop.classList.toggle("active");
});

// Close the modal when the close button is clicked
modalCloseBtn.addEventListener("click", closeModal);

// Close the modal when the backdrop is clicked
backdrop.addEventListener("click", closeModal);

// Close the modal when the Escape key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});


var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1, // 1 slide for small screens
  spaceBetween: 10,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // When the screen is 760px or larger
    760: {
      slidesPerView: 3, // Show 3 slides at once
      spaceBetween: 24,
    },
  },
  grabCursor: true, // Enables mouse dragging
});
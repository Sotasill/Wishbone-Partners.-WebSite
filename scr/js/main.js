




// Получаем элементы
const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const backdrop = document.getElementById("backdrop");

// Функция для закрытия модального окна и скрытия фона
function closeModal() {
  mobileMenu.classList.remove("active");
  backdrop.classList.remove("active");
}

// Переключение модального окна и фона при нажатии на кнопку бургер
burgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  backdrop.classList.toggle("active");
});

// Закрытие модального окна при нажатии на кнопку закрытия
modalCloseBtn.addEventListener("click", closeModal);

// Закрытие модального окна при клике на фон
backdrop.addEventListener("click", closeModal);

// Закрытие модального окна при нажатии клавиши Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});



// ======================================================= слайдер =========================================

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      enabled: true,
      sensitivity: 1,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        loop: true,
        allowTouchMove: true,
        mousewheel: {
          enabled: true,
        },
      },
      760: {
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false, // Отключаем прокрутку на больших экранах
        mousewheel: {
          enabled: false, // Отключаем прокрутку мышью на больших экранах
        },
      },
    },
    on: {
      slideChangeTransitionStart: function () {
        const slides = document.querySelectorAll(
          ".swiper-slide .slide-content"
        );
        slides.forEach((slide) => {
          slide.style.opacity = "0"; // Скрываем все слайды
          slide.style.transform = "translateY(20px)"; // Сдвигаем вниз
        });
      },
      slideChangeTransitionEnd: function () {
        const activeSlide = document.querySelector(
          ".swiper-slide-active .slide-content"
        );
        if (activeSlide) {
          setTimeout(() => {
            activeSlide.style.opacity = "1"; // Показываем активный слайд
            activeSlide.style.transform = "translateY(0)"; // Возвращаем в исходное положение
          }, 500); // Задержка 0.5 секунды
        }
      },
    },
    touchEventsTarget: "container",
    simulateTouch: true,
    grabCursor: true,
  });
});



//================================================== кнопка прокрутки ==============================================



function toggleScrollTopButton() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (window.innerWidth <= 360) {
    scrollTopBtn.style.display = "none"; // Hide the button on small screens
  } else {
    scrollFunction(); // Check the scroll position to decide visibility
  }
}


toggleScrollTopButton();


window.addEventListener("resize", toggleScrollTopButton);

// Show button when scrolling down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  // Only check scroll position if width is greater than 360
  if (window.innerWidth > 360) {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      scrollTopBtn.style.display = "block"; // Show button if scrolled down
    } else {
      scrollTopBtn.style.display = "none"; // Hide button if near top
    }
  }
}

// Smooth scroll to the top when the button is clicked
document.getElementById("scrollTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
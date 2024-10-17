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

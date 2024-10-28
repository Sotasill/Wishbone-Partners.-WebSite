




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




document.addEventListener("DOMContentLoaded", function () {
  const heroInfo = document.querySelector(".hero-info");

  // Set up Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Trigger the animation
          observer.unobserve(entry.target); // Stop observing after first appearance
        }
      });
    },
    { threshold: 0.5 }
  ); // Trigger when 50% of the block is visible

  observer.observe(heroInfo); // Start observing the .hero-info block
});


document.addEventListener("DOMContentLoaded", function () {
  const heroInfo = document.querySelector(".hero-info");
  const heroImg = document.querySelector(".hero-img");

  // Set up Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Trigger the animation
          observer.unobserve(entry.target); // Stop observing after first appearance
        }
      });
    },
    { threshold: 0.5 }
  ); // Trigger when 50% of the element is visible

  // Observe both the text block and the image
  observer.observe(heroInfo);
  observer.observe(heroImg);
});



document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".image-section-info");

  const observerOptions = {
    root: null, // отслеживаем вьюпорт
    rootMargin: "0px",
    threshold: 0.1, // процент видимости, чтобы активировать событие
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Если элемент в области видимости, добавляем класс
        entry.target.classList.add("visible");
      } else {
        // Если элемент вышел из области видимости, убираем класс (опционально)
        entry.target.classList.remove("visible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const headingH2 = document.querySelector(".Our-process h2"); // Выбор заголовка H2

  const observerOptions = {
    root: null, // Отслеживаем вьюпорт
    rootMargin: "0px",
    threshold: 0.1, // Процент видимости для активации события
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Если элемент в области видимости, добавляем классы
        headingH2.classList.add("visible");
        headingH2.classList.add("highlight");

        // Убираем выделение через 0.5 секунды
        setTimeout(() => {
          headingH2.classList.remove("highlight");
        }, 500); // Время соответствует длительности перехода
      } else {
        // Если элемент вышел из области видимости, убираем классы
        headingH2.classList.remove("visible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(headingH2); // Наблюдаем за заголовком H2
});








document.addEventListener("DOMContentLoaded", () => {
  const clientsInfo = document.querySelector(".clients-info");
  const clientsIcons = document.querySelector(".clients-icons");

  const observerOptions = {
    root: null, // Отслеживаем вьюпорт
    rootMargin: "0px",
    threshold: 0.1, // Процент видимости для активации события
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Если элемент в области видимости, добавляем классы
        clientsInfo.classList.add("visible");
        clientsIcons.classList.add("visible");
      } else {
        // Если элемент вышел из области видимости, убираем классы
        clientsInfo.classList.remove("visible");
        clientsIcons.classList.remove("visible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(clientsInfo); // Наблюдаем за текстом
  observer.observe(clientsIcons); // Наблюдаем за иконками
});




document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".fade-in-title");
  const paragraph = document.querySelector(".fade-in-paragraph");

  // Функция для обработки видимости элементов
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        title.classList.add("visible");
        setTimeout(() => {
          paragraph.classList.add("visible");
        }, 500); // Параграф появляется через 500 мс после заголовка

        // Удаляем наблюдатель, чтобы не вызывать повторное срабатывание
        observer.unobserve(entry.target);
      }
    });
  };

  // Настройка Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, // Настройка порога срабатывания
  });

  // Наблюдаем за заголовком и параграфом
  observer.observe(title);
  observer.observe(paragraph);
});

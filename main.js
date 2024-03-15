import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplayDisableOnInteraction: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

var swiper3 = new Swiper(".recommend-course-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  breakpoints: {
    // 480: {
    //   slidesPerView: 1,
    //   spaceBetween: 30,
    // },
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper4 = new Swiper(".lecturers-swiper", {
  slidesPerView: 4,
  // slidesPerGroup: 1,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 4,
  // slidesPerGroup: 1,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const listQuestion = document.querySelectorAll(".question");
listQuestion.forEach((question) => {
  question.addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      this.querySelector("i").classList.add("fa-chevron-up");
      this.querySelector("i").classList.remove("fa-chevron-down");
    } else {
      this.querySelector("i").classList.remove("fa-chevron-up");
      this.querySelector("i").classList.add("fa-chevron-down");
    }
  });
});

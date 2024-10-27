"use script"


new Swiper('.swiper', {
    loop: true,
    spaceBetween: 10,
  
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },

    breakpoints: {
        // when window width is >= 450px
        450: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        // when window width is >= 991px
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
    }
});



const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector(".menu-icon");
const closeIcon = menuBtn.querySelector(".close-icon");
const navbarLinks = document.querySelector(".navbar-links");

menuBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("open-nav");
  menuBtn.classList.toggle("menu-btn-rotate");
  if (menuIcon.classList.contains("hidden-icon")) {
    menuIcon.classList.remove("hidden-icon");
    closeIcon.classList.add("hidden-icon");
  } else {
    menuIcon.classList.add("hidden-icon");
    closeIcon.classList.remove("hidden-icon");
  }
})

window.addEventListener("scroll", () => {
  if (navbarLinks.classList.contains("open-nav")) {
    navbarLinks.classList.remove("open-nav");
  }
})
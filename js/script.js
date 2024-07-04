const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// show menu
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// hide menu
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

AOS.init();

// logo
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// nav menu
gsap.from(".nav_menu_list .nav_menu_items", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
  stagger: 0.3,
});

// toggle btn
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// main heading
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2,
  duration: 0.5,
});

// btn
gsap.from(".btn-wrapper", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// image
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// info text
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// Fasilitas
gsap.from(".fasilitas", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// tentang kami
gsap.from(".tentang", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// kontak
gsap.from(".kontak", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
})

window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".header");
  if (window.pageYOffset >= 30) {
    nav.classList.add("shadow-header");
  } else {
    nav.classList.remove("shadow-header");
  }
});

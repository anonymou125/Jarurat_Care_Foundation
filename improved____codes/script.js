document.addEventListener("DOMContentLoaded", () => {
  // GSAP animation for menu items (staggered effect)
  gsap.from(".menu li", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });

  // GSAP animation for title (letter by letter)
  gsap.from(".title", {
    duration: 2,
    text: "",
    ease: "power2.inOut",
    delay: 0.5,
  });

  // GSAP animation for full-screen menu items
  gsap.from(".full-menu li", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
  });

  // GSAP animation for full-screen menu WhatsApp button
  gsap.from(".full-whatsapp-button", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power4.out",
  });
});

// Toggle full-screen menu
const menuIcon = document.getElementById("menu-icon");
const fullScreenMenu = document.getElementById("full-screen-menu");

menuIcon.addEventListener("click", () => {
  fullScreenMenu.classList.toggle("active");
});
fullScreenMenu.addEventListener("click", () => {
  if (fullScreenMenu.classList.contains("active")) {
    fullScreenMenu.classList.remove("active");
  }
});



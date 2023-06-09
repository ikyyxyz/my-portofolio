// icon Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let NavLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      NavLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //   sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // menghilangkan icon dan menu icon ketika navlink di klik
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scrool reveal
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .portofolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  speedDelay: 1000,
  loop: true,
});

// Notification message for pesan masuk

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Show success notification
  document.getElementById("success-alert").style.display = "block";
  document.getElementById("success-alert").innerText =
    "Pesan Berhasil Terkirim";
});

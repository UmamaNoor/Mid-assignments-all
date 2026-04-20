// Navbar scroll effect
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  
  if (window.scrollY > 50) {
    navbar.classList.add("bg-dark", "shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Button click alert (CTA)
let ctaBtn = document.querySelector(".cta .btn");

if (ctaBtn) {
  ctaBtn.addEventListener("click", function () {
    alert("Project Started 🚀");
  });
}
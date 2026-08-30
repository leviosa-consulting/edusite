// Ashford Academy — shared interactions

// Mobile navigation toggle
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    header.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

// Highlight the current page in the nav
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Scroll-reveal animation
const revealables = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealables.forEach((el) => observer.observe(el));
} else {
  revealables.forEach((el) => el.classList.add("visible"));
}

// Contact form (demo only — no backend)
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    if (status) {
      status.textContent =
        "Thank you! Your message has been received. Our office will reply within two business days.";
      status.style.color = "var(--green-700)";
    }
    contactForm.reset();
  });
}

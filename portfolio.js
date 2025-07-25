// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: false, 
  mirror: true,
});

// Header section scroll up effect
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  const aboutSection = document.getElementById('about');
  let lastScrollTop = 0;


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbar.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  observer.observe(aboutSection);
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 50) {
      navbar.style.transform = 'translateY(-100%)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});
// Typed.js for Hero Job Title
const typed = new Typed('#typed', {
  strings: ["Web Developer", "Creative Coder"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

// Scroll Effect for Navbar Background
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Theme Toggle Setup
const toggleButton = document.getElementById('theme-toggle');
const hero = document.getElementById('home');

// Load saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  if (toggleButton) toggleButton.textContent = '🌞';
  if (hero) {
    hero.style.background = 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)';
  }
} else {
  if (toggleButton) toggleButton.textContent = '🌚';
}

// Toggle theme and save preference
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleButton.textContent = isDark ? '🌞' : '🌚';

    if (hero) {
      hero.style.background = isDark
        ? 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)'
        : 'linear-gradient(-45deg, #e3fdfd, #cbf1f5, #a6e3e9, #71c9ce)';
    }
  });
}

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".skill-bar").forEach(bar => {
      const percent = bar.getAttribute("data-percent");
      const fill = bar.querySelector(".bar-fill");
      fill.style.width = percent + "%";
      bar.querySelector(".bar-percent").textContent = percent + "%";
    });
  });

  
   document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-bar");

    skillBars.forEach(bar => {
      const percent = bar.dataset.percent;
      const fill = bar.querySelector(".bar-fill");
      const label = bar.querySelector(".bar-percent");

      // Animate on scroll using IntersectionObserver
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            fill.style.width = percent + "%";
            label.textContent = percent;
            observer.unobserve(bar); // Run once
          }
        });
      }, { threshold: 0.5 });

      observer.observe(bar);
    });
  });

// Highlight Active Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

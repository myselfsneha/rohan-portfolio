// Animate sections on scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const scrollY = window.scrollY + window.innerHeight * 0.85;

  sections.forEach((section) => {
    if (scrollY > section.offsetTop) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
};

// Initial styles
sections.forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
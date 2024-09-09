document.addEventListener("DOMContentLoaded", function () {
  // Scroll effect for the sections
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop - 100) {
        section.classList.add("fade-in");
      }
    });
  });
});

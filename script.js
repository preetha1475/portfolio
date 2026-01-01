/* Smooth scroll for down arrow */
function scrollTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

/* Reveal sections on scroll */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

/* Observe all hidden sections */
document.querySelectorAll(".hidden").forEach((section) => {
  observer.observe(section);
});

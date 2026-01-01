function showSection(sectionId) {
  const sections = document.querySelectorAll(".page");
  sections.forEach(section => section.classList.remove("active"));

  document.getElementById(sectionId).classList.add("active");
}

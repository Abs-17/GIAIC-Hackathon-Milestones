
const toggleSkillsBtn = document.getElementById("toggle-skills-btn");
const skillsSection = document.getElementById("skills-section");


toggleSkillsBtn?.addEventListener("click", () => {
  if (skillsSection) {
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  }
});

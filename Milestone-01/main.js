
var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
var skillsSection = document.getElementById("skills");

toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    }
});

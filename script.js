const nameInput = document.getElementById("name");
const objectiveInput = document.getElementById("objective");
const skillsInput = document.getElementById("skills");
const educationInput = document.getElementById("education");

const previewName = document.getElementById("previewName");
const previewObjective = document.getElementById("previewObjective");
const previewSkills = document.getElementById("previewSkills");
const previewEducation = document.getElementById("previewEducation");

nameInput.addEventListener("input", () => {
    previewName.textContent = nameInput.value || "Your Name";
});

objectiveInput.addEventListener("input", () => {
    previewObjective.textContent =
        objectiveInput.value || "Your career objective will appear here.";
});

skillsInput.addEventListener("input", () => {
    previewSkills.textContent =
        skillsInput.value || "Your skills will appear here.";
});

educationInput.addEventListener("input", () => {
    previewEducation.textContent =
        educationInput.value || "Your education details will appear here.";
});

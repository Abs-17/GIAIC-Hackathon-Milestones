
var _a;
(_a = document.getElementById('generateResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var resumeContent = "\n        <div id=\"resume_field\"><span>Full Name:</span> ".concat(fullName, "</div>\n        <div id=\"resume_field\"><span>Email:</span> ").concat(email, "</div>\n        <div id=\"resume_field\"><span>Phone:</span> ").concat(phone, "</div>\n        <div id=\"resume_field\"><span>Address:</span> ").concat(address, "</div>\n        <div id=\"resume_field\"><span>Skills:</span> ").concat(skills, "</div>\n        <div id=\"resume_field\"><span>Experience:</span> ").concat(experience, "</div>\n        <div id=\"resume_field\"><span>Education:</span> ").concat(education, "</div>\n    ");
    var resumeOutput = document.getElementById('resumeOutput');
    var resumeContentDiv = document.getElementById('resumeContent');
    if (resumeContentDiv) {
        resumeContentDiv.innerHTML = resumeContent;
        resumeContentDiv.setAttribute('contenteditable', 'true');
    }
    if (resumeOutput) {
        resumeOutput.style.display = 'block';
    }
});

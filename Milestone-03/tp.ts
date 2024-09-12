
document.getElementById('generateResume')?.addEventListener('click', function () {
    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    const resumeContent = `
        <div id="resume_field"><span>Full Name:</span> ${fullName}</div>
        <div id="resume_field"><span>Email:</span> ${email}</div>
        <div id="resume_field"><span>Phone:</span> ${phone}</div>
        <div id="resume_field"><span>Address:</span> ${address}</div>
        <div id="resume_field"><span>Skills:</span> ${skills}</div>
        <div id="resume_field"><span>Experience:</span> ${experience}</div>
        <div id="resume_field"><span>Education:</span> ${education}</div>
    `;

    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
    const resumeContentDiv = document.getElementById('resumeContent') as HTMLElement;
    
    if (resumeContentDiv) {
        resumeContentDiv.innerHTML = resumeContent;
        resumeContentDiv.setAttribute('contenteditable', 'true');
    }

    if (resumeOutput) {
        resumeOutput.style.display = 'block';
    }
});

function submitForm(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    // Display submitted information (you can replace this with server-side processing)
    alert(`Application Submitted:\nName: ${name}\nAge: ${age}\nGrade: ${grade}`);
}

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const streetAddress = document.getElementById('streetAddress').value;
    const addressLine2 = document.getElementById('addressLine2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const postalCode = document.getElementById('postalCode').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const bank = document.getElementById('bank').value;
    const form =document.getElementById('form-submit').value;

    // Construct the email content
    const emailContent = `
        Name: ${firstName} ${lastName}
        Address: ${streetAddress}, ${addressLine2}, ${city}, ${state}, ${country}, ${postalCode}
        Phone: ${phone}
        Email: ${email}
        Age: ${age}
        Bank: ${bank}
    `;

    // Send the email using smtp.js
    Email.send({
        SecureToken : "efd310ba-29b9-4c36-af07-a505e07d5b5c",
        To : 'olumidege1988@gmail.com',
        From : "olumidege1988@gmail.com",
        Subject : "Runing this email",
        Body : "Testing by holy man like,share thank you"
    }).then(
        message => alert("Email sent successfully")
    ).catch(
        error => alert("Failed to send email: " + error)
    );
}
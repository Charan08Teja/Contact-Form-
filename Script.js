document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.fullname.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const gender = form.querySelector("input[name='gender']:checked");
        const dob = form.dob.value;

        if (name === "" || email === "" || password === "" || !gender || dob === "") {
            alert("Please fill out all required fields.");
            return;
        }

        alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}\nGender: ${gender.value}`);
        
    });

    form.addEventListener("reset", function () {
        alert("Form has been reset.");
    });
});

function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (!firstName || !lastName || !dob || !country || genderInputs.length === 0 || !profession || !email || !mobile) {
        alert("Please fill in all required fields.");
        return false;
    }

    displayPopup();
    return false;
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("country").value = "";
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    genderInputs.forEach(input => (input.checked = false));
    document.getElementById("profession").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
}

function displayPopup() {
    document.getElementById("popupFirstName").textContent = document.getElementById("firstName").value;
    document.getElementById("popupLastName").textContent = document.getElementById("lastName").value;
    document.getElementById("popupDob").textContent = document.getElementById("dob").value;
    document.getElementById("popupCountry").textContent = document.getElementById("country").value;
    const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
    document.getElementById("popupGender").textContent = Array.from(genderInputs).map(input => input.value).join(", ");
    document.getElementById("popupProfession").textContent = document.getElementById("profession").value;
    document.getElementById("popupEmail").textContent = document.getElementById("email").value;
    document.getElementById("popupMobile").textContent = document.getElementById("mobile").value;

    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}
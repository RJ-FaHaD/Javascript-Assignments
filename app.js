const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const dobInput = document.getElementById('dob');
const addressInput = document.getElementById('address');
const genderSelect = document.getElementById('gender');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const imageInput = document.getElementById('image');
const courseSelect = document.getElementById('course');
const submitButton = document.querySelector('form button[type="submit"]');

function logInputValues() {
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
    console.log('Number:', numberInput.value);
    console.log('DOB:', dobInput.value);
    console.log('Address:', addressInput.value);
    console.log('Gender:', genderSelect.value);
    console.log('Password:', passwordInput.value);
    console.log('Confirm Password:', confirmPasswordInput.value);
    console.log('Image:', imageInput.files[0]);
    console.log('Course:', courseSelect.value);
}

function checkPasswords(event) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Password is not the same');
        event.preventDefault();}
}

submitButton.addEventListener('click', (event) => {
    logInputValues();
    checkPasswords(event);
});

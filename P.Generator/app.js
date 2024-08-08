
function generatePassword() {
    
    const length = parseInt(document.getElementById('length').value);
    const numDigits = parseInt(document.getElementById('numeric').value);
    const numUppercase = parseInt(document.getElementById('uppercase').value);
    const numLowercase = parseInt(document.getElementById('lowercase').value);

    if (isNaN(length) || isNaN(numDigits) || isNaN(numUppercase) || isNaN(numLowercase)) {
        alert('Please enter valid numbers.');
        return;
    }
    
    if (numDigits + numUppercase + numLowercase !== length) {
        alert('The sum of numeric digits, uppercase letters, and lowercase letters must equal the password length.');
        return;
    }

    const digits = '123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    let password = '';
    
    function getRandomChar(set) {
        return set[Math.floor(Math.random() * set.length)];
    }

    for (let i = 0; i < numDigits; i++) {
        password += getRandomChar(digits);
    }
    for (let i = 0; i < numUppercase; i++) {
        password += getRandomChar(uppercase);
    }
    for (let i = 0; i < numLowercase; i++) {
        password += getRandomChar(lowercase);
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    document.getElementById('password').textContent = password;
}

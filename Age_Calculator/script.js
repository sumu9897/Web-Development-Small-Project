function calculateAge() {
    const birthDate = document.getElementById('birthDate').value;
    
    if (birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        const age = today.getFullYear() - birth.getFullYear();

        // Check if the birthday has occurred this year
        if (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate())) {
            document.getElementById('result').innerText = `Your age is ${age - 1}.`;
        } else {
            document.getElementById('result').innerText = `Your age is ${age}.`;
        }
    } else {
        document.getElementById('result').innerText = 'Please enter your birthdate.';
    }
}

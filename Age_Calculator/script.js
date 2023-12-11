function calculateAge() {
    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birthDate').value;
    
    if (name && birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        
        let ageYears = today.getFullYear() - birth.getFullYear();
        let ageMonths = today.getMonth() - birth.getMonth();
        let ageDays = today.getDate() - birth.getDate();

        // Adjust age for negative months or days
        if (ageDays < 0) {
            ageMonths--;
            ageDays += 30; // assuming an average month length of 30 days
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        document.getElementById('result').innerText = `Welcome ${name}\nAge: ${ageYears} years ${ageMonths} months ${ageDays} days`;
    } else {
        document.getElementById('result').innerText = 'Please enter your name and date of birth.';
    }
}

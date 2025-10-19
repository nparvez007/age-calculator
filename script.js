
function getDOB() {
    const dobInput = document.getElementById('inputDob').value;
    const currentDateInput = document.getElementById('cdate').value;

    if (!dobInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    if (dob > currentDate) {
        alert("Date of Birth can't be in the future!");
        return;
    }

    // Age calculation in detail
    let years = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const dobMidnight = new Date(dob);
    const diffInMs = currentDate - dobMidnight;
    const totalSeconds = Math.floor(diffInMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const seconds = totalSeconds;

    document.getElementById('currentAge').textContent =
        `Your age is ${years} years, ${months} months, ${days} days, ` +
        `${hours} total hours, and ${seconds} total seconds.`;
}

function clearFields() {
    document.getElementById('inputDob').value = '';
    const currentDateInput = document.getElementById('cdate');
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    currentDateInput.value = `${yyyy}-${mm}-${dd}`;
    document.getElementById('currentAge').textContent = '';
}

// Set current date on page load
document.addEventListener('DOMContentLoaded', () => {
    clearFields(); // Uses the clearFields to initialize
});

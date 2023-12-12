function updateClock() {
    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');

    const now = new Date();
    const utcOffset = 6 * 60; // Offset for Bangladesh Standard Time (BST) in minutes
    const localTime = new Date(now.getTime() + utcOffset * 60000);

    const hours = localTime.getHours() % 12; // Convert to 12-hour format
    const minutes = localTime.getMinutes();
    const seconds = localTime.getSeconds();

    const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteDeg = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondDeg = (360 / 60) * seconds;

    hourElement.style.transform = `rotate(${hourDeg}deg)`;
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
    secondElement.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initial update

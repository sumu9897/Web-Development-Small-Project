document.addEventListener("DOMContentLoaded", function() {
    // Get the counter element
    const counterElement = document.getElementById("counter");

    // Initialize the counter
    let count = 0;

    // Function to update the counter
    function updateCounter() {
        count++;
        counterElement.textContent = count;
    }

    // Set up an interval to update the counter every second
    setInterval(updateCounter, 50);
});

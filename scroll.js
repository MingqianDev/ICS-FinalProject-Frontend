const container = document.querySelector('#forecast-container');
const items = document.querySelectorAll(".daily-weather-card");
/*
let touchStartX;
let touchStartY;

// Listen for the 'touchstart' event on the container element
container.addEventListener('touchstart', (e) => {
    // Store the initial touch position coordinates
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
    e.preventDefault(); // Prevent default touch behavior
});

// Listen for the 'touchmove' event on the container element
container.addEventListener('touchmove', (e) => {
    e.preventDefault(); // Prevent default touch behavior
    const touchCurrentX = e.changedTouches[0].clientX;
    const touchCurrentY = e.changedTouches[0].clientY;
    const touchDeltaX = touchStartX - touchCurrentX;
    const touchDeltaY = touchStartY - touchCurrentY;

    // When the horizontal scroll distance is greater than the vertical scroll distance, consider it as a left or right swipe
    if (Math.abs(touchDeltaX) > Math.abs(touchDeltaY)) {
        container.scrollLeft += touchDeltaX;
    }

    // Update the touch start coordinates for the next touch move event
    touchStartX = touchCurrentX;
    touchStartY = touchCurrentY;
});
*/
// Listen for the 'wheel' event on the container element
container.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent the default vertical scrolling behavior
    container.scrollLeft += e.deltaY; // Change the horizontal scroll position based on the direction of the mouse wheel
});

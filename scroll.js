const container = document.querySelector('#forecast-container');
const items = document.querySelectorAll(".daily-weather-card");

container.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent the default vertical scrolling behavior
    container.scrollLeft += e.deltaY; // Change the horizontal scroll position based on the direction of the mouse wheel
})
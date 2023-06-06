const container = document.getElementById('forecast-container');
const items = document.querySelectorAll(".forecast-item");

for (const item of items) {
  item.addEventListener('mouseenter', () => {
    container.style.overflowX = 'scroll';
  });
  item.addEventListener('mouseleave', () => {
    container.style.overflowX = 'hidden';
  });
}
container.scrollLeft = 150;
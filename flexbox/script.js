// Dynamically add content to the flex container
const flexContainer = document.querySelector('.flex-container');
for (let i = 4; i <= 6; i++) {
  const flexItem = document.createElement('div');
  flexItem.classList.add('flex-item');
  flexItem.textContent = 'Item ' + i;
  flexContainer.appendChild(flexItem);
}

// Dynamically add content to the grid container
const gridContainer = document.querySelector('.grid-container');
for (let i = 4; i <= 6; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.textContent = 'Item ' + i;
  gridContainer.appendChild(gridItem);
}

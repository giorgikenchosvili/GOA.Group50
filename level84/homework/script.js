const box = document.getElementById('box');
let topPosition = 0;
let leftPosition = 0;
const step = 30;

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'ArrowUp') {
    topPosition -= step;
  } else if (key === 'ArrowDown') {
    topPosition += step;
  } else if (key === 'ArrowLeft') {
    leftPosition -= step;
  } else if (key === 'ArrowRight') {
    leftPosition += step;
  }

  box.style.top = topPosition + 'px';
  box.style.left = leftPosition + 'px';
});

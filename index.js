const modal = document.getElementById('modal');
const showButton = document.getElementById('show-button');
const closeButton = document.getElementById('close-button');

// modal is set to `display: none` by default
// clicking this button turns the display to block and makes it visible
showButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// clicking the close button turns the display back to none and makes it invisible
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// clicking anywhere on the window also sets display of modal to none
// if there are things on the modal you may need to tweak this
window.addEventListener('click', () => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
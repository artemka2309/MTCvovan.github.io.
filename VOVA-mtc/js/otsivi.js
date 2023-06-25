const modalButton = document.getElementById('modal-button');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

modalButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});


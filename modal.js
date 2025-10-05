function size_and_scale_modals() {
 // Get DOM Elements
  const doModal = document.querySelector('#size_and_scale-do-modal');
  const dontModal = document.querySelector('#size_and_scale-dont-do-modal');
  const doModalBtn = document.querySelector('#do-modal-btn');
  const dontModalBtn = document.querySelector('#dont-modal-btn');
  const closeBtns = document.querySelectorAll('.close');

  // Event Listeners
  doModalBtn.addEventListener('click', () => openModal(doModal));
  dontModalBtn.addEventListener('click', () => openModal(dontModal));
  closeBtns.forEach(btn => btn.addEventListener('click', closeAllModals));
  window.addEventListener('click', outsideClick);

  // Functions
  function openModal(modal) {
    modal.style.display = 'block';
  }

  function closeAllModals() {
    doModal.style.display = 'none';
    dontModal.style.display = 'none';
  }

  function outsideClick(e) {
    if (e.target === doModal) doModal.style.display = 'none';
    if (e.target === dontModal) dontModal.style.display = 'none';
  }
}

function typography_page_modals() {
  // Get DOM Elements
  const doModal = document.querySelector('#typography-do-modal');
  const dontModal = document.querySelector('#typography-dont-do-modal');
  const doModalBtn = document.querySelector('#do-modal-btn');
  const dontModalBtn = document.querySelector('#dont-modal-btn');
  const closeBtns = document.querySelectorAll('.close');

  // Event Listeners
  doModalBtn.addEventListener('click', () => openModal(doModal));
  dontModalBtn.addEventListener('click', () => openModal(dontModal));
  closeBtns.forEach(btn => btn.addEventListener('click', closeAllModals));
  window.addEventListener('click', outsideClick);

  // Functions
  function openModal(modal) {
    modal.style.display = 'block';
  }

  function closeAllModals() {
    doModal.style.display = 'none';
    dontModal.style.display = 'none';
  }

  function outsideClick(e) {
    if (e.target === doModal) doModal.style.display = 'none';
    if (e.target === dontModal) dontModal.style.display = 'none';
  }
}

function colour_and_contrast_modals() {
 // Get DOM Elements
  const doModal = document.querySelector('#colour_and_contrast-do-modal');
  const dontModal = document.querySelector('#colour_and_contrast-dont-do-modal');
  const doModalBtn = document.querySelector('#do-modal-btn');
  const dontModalBtn = document.querySelector('#dont-modal-btn');
  const closeBtns = document.querySelectorAll('.close');

  // Event Listeners
  doModalBtn.addEventListener('click', () => openModal(doModal));
  dontModalBtn.addEventListener('click', () => openModal(dontModal));
  closeBtns.forEach(btn => btn.addEventListener('click', closeAllModals));
  window.addEventListener('click', outsideClick);

  // Functions
  function openModal(modal) {
    modal.style.display = 'block';
  }

  function closeAllModals() {
    doModal.style.display = 'none';
    dontModal.style.display = 'none';
  }

  function outsideClick(e) {
    if (e.target === doModal) doModal.style.display = 'none';
    if (e.target === dontModal) dontModal.style.display = 'none';
  }
}

'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//otvaranje modala klikom na modal element
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//zatvaranje modala kada se klikne izvan modala/prozora - odnosno na overlay i na x button
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//keypress event
document.addEventListener('keydown', function (e) {
  console.log(`Button "${e.key}" clicked`);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //logičko !not - zatvaranje ako element NE SADRŽI klasu .hidden
    closeModal();
  }
});

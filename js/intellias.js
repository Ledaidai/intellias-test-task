const btnEl = document.querySelector('.action-btn');
const modalEl = document.querySelector('#contact-form');
const bodyEl = document.querySelector('body');
btnEl.addEventListener('click', onModalOpen);

const closeModalBtn = document.querySelector('.modal-close-btn');
closeModalBtn.addEventListener('click', onModalClose);

const submitBtnEl = document.querySelector('#submit-btn');
submitBtnEl.addEventListener('click', onFormSubmit);
const formEl = document.querySelector('#form');
const inputEmailEl = document.querySelector('#form-input-email');
const inputNameEl = document.querySelector('#form-input-name');
const inputPhoneEl = document.querySelector('#form-input-phone');
const inputMessageEl = document.querySelector('#form-input-message');

function onModalOpen(event) {
  modalEl.classList.add('modal-active');
  bodyEl.classList.add('body-scroll-disable')
}

function onModalClose(event) {
  modalEl.classList.remove('modal-active');
  bodyEl.classList.remove('body-scroll-disable')
  formEl.reset();
}

function onFormSubmit(event) {
  if (inputEmailEl.value == '' || inputNameEl.value == '' || inputPhoneEl.value == '' | inputMessageEl.value == '') {
    alert("Внимание! Все поля должны быть заполнены!");
  } else {
    formEl.reset();
    alert('Спасибо!) Ваше сообщение отправлено!');
  }
}

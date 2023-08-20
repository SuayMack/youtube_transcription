import { startLoading, stopLoading, loadingMessage } from './loading.js';

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  try {
    loadingMessage('Iniciando a aplicação...');
    startLoading();

    //get form data
    const formData = new FormData(form);
    const url = formData.get('url');
    console.log(url);

    //load video
   

  } catch (error) {
    console.log('[SUBMIT_ERROR]', error);
  } finally {
    stopLoading();
  }
})
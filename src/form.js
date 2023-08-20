import { startLoading, stopLoading, loadingMessage } from './loading.js';

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  try {
    loadingMessage('Iniciando a aplicação...');
    startLoading();
    //pegar os dados do form
    //load video
  } catch (error) {
    console.log('[SUBMIT_ERROR]', error);
  } finally {
    stopLoading();
  }
})
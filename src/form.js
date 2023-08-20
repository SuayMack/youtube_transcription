import { startLoading, stopLoading, loadingMessage } from './loading.js';
import { loadVideo } from './youtube-api.js';

const form = document.querySelector('#form');

form.addEventListener('submit', async(e) => {
  e.preventDefault();

  try {
    loadingMessage('Iniciando a aplicação...');
    startLoading();
    
    //get form data
    const formData = new FormData(form);
    const url = formData.get('url');

    //load video
    await loadVideo(url);

  } catch (error) {
    console.log('[SUBMIT_ERROR]', error);
  } finally {
    stopLoading();
  }
})
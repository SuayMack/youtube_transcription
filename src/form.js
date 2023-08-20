import axios from 'axios';
import { startLoading, stopLoading, loadingMessage } from './loading.js';
import { getVideoId, loadVideo } from './youtube-api.js';

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

    //conect server
    loadingMessage('Baixando e convertendo o video...');
    await axios.get('http://localhost:3333/audio?v=' + getVideoId(url));

  } catch (error) {
    console.log('[SUBMIT_ERROR]', error);
  } finally {
    stopLoading();
  }
})
import { pipeline } from "@xenova/transformers";
import { loadingMessage } from "./loading";

// import data from './data.json';

let data = null;

export async function transcribeAudio() {
  const options = {
    chunk_length_s: 30,
    stride_length_s: 5,
    language: 'portuguese',
    task: 'transcribe',
    return_timestamps: true
  }

  try {
    console.time();
    loadingMessage('Iniciando a transcrição de audio, essa etapa é demorada...aguarde');
    console.log('[START_TRANSCRIBE]');

    const transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-small')
    data = await transcriber("../audio.mp3", options);

  } catch (error) {
    console.log('[START_TRANSCRIBE_ERROR]', error);
    throw new Error(error);
  } finally {
   
    console.timeEnd();

    loadingMessage("Transcrição terminada!");

    return data;
  
  }


}

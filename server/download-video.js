import ytdl from "ytdl-core";
import fs from "fs";

export const downloader = (videoId) => new Promise((resolve, reject) => {
//clear URL
  const videoURL = 'http://www.youtube.com/watch?v=' + videoId;
  console.log('[START_DOWNLOAD]', videoURL);

  ytdl(videoURL, { 
    //the quality of the video (the IA no needs hight quality)
    quality: 'lowestaudio', 
    filter: 'audioonly', 
  })
  .on('end', () => {
    console.log('[END_DOWNLOAD]');
    resolve();
  })
  .on('error', () => {
    console.log('[ERROR]');
    reject(['ERROR_DOWNLOAD_VIDEO']);
  })
  .pipe(fs.createWriteStream('./audio.mp3'));
})
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get('/audio', async (req, res) => {
  const videoId = req.query.v;

  try {
    //download
    // create mp3 file

    return res.send('ok');

  } catch (error) {

    console.log(error);
    return res.send(error);
    
  } finally {
    
  }

  console.log(videoId);
  return res.send(videoId);
})

app.listen(3333, () => {
  console.log("Server started on port 3333");
})

const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');//libreria para descargar el video 
const app = express();
app.use(cors());
app.get('/download', (req, res) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment;\  filename="videoOnline.mp4');
    ytdl(url, {format: 'mp4'}).pipe(res);
});

app.listen(3000, () => { //Arancar servidor en la terminal con:   node index.js
    console.log('It Works!');
});

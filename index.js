const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core'); //libreria para descargar el video 
const app = express();
app.use(cors());
app.get('/download', (req, res) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment;\  filename="videoOnline.mp4');
    ytdl(url, { format: 'mp4' }).pipe(res);
});

app.listen(3000, () => { //Arancar servidor en la terminal con:   node index.js
    console.log('It Works!');
});

//Convertir formato de video

const ffmpeg = require("fluent-ffmpeg");
const bodyParser = require("body-parser");
const fs = require("fs");
const fileUpload = require("express-fileupload");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

ffmpeg.setFfmpegPath("C:/ffmpeg/ffmpeg.exe");
ffmpeg.setFfprobePath("C:/ffmpeg/");
ffmpeg.setFlvtoolPath("C:/flvtool");

app.post("/convert", (req, res) => {
    let to = req.body.to;
    let file = req.files.file;
    let fileName = `output.${to}`;
    console.log(to);
    console.log(file);

    file.mv("tmp/" + file.name, function(err) {
        if (err) return res.sendStatus(500).send(err);
        console.log("File Uploaded successfully");
    });

    ffmpeg("tmp/" + file.name)
        .withOutputFormat(to)
        .on("end", function(stdout, stderr) {
            console.log("Finished");
            res.download(__dirname + fileName, function(err) {
                if (err) throw err;

                fs.unlink(__dirname + fileName, function(err) {
                    if (err) throw err;
                    console.log("File deleted");
                });
            });
            fs.unlink("tmp/" + file.name, function(err) {
                if (err) throw err;
                console.log("File deleted");
            });
        })
        .on("error", function(err) {
            console.log("an error happened: " + err.message);
            fs.unlink("tmp/" + file.name, function(err) {
                if (err) throw err;
                console.log("File deleted");
            });
        })
        .saveToFile(__dirname + fileName);
});
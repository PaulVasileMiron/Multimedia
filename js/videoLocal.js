function comenzar() {

    zonaVideo = document.getElementById("zonaVideo");
    var video = document.getElementById("selector");
    video.addEventListener("change", procesarVideo, false);

}

function procesarVideo(e) {

    var video = e.target.files;
    var mi_video = video[0];
    zonaVideo.innerHTML = video;

}

window.addEventListener("load", comenzar, false)
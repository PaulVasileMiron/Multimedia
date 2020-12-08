
function accionPlay() {
    var reproducir = document.getElementById('botonPlay');
    if (!video.paused && !video.ended) {
        video.pause();
        reproducir.value = '\u25BA';
    } else {
        video.play();
        reproducir.value = ' || ';
    }
}

function accionReiniciar() {
    var reproducir = document.getElementById('botonPlay');

    video.currentTime = 0;
    video.play();
    reproducir.value = ' || ';
}

function accionRetrasar() {
    if (video.currentTime > 3) {
        video.currentTime = video.currentTime - 3;
    }
    if (video.currentTime < 3 && video.currentTime > 0) {
        video.currentTime = 0;
    }
}

function accionAdelantar() {
    if (video.currentTime < video.duration - 3) {
        video.currentTime = video.currentTime + 3;
    }
    if (video.currentTime > video.duration - 3 && video.currentTime < video.duration) {
        video.currentTime = video.duration;
    }
}

function accionSilenciar() {
    var silenciar = document.getElementById('silenciar');
    if (video.muted) {
        video.muted = false;
        silenciar.value = '\uD83D\uDD07';

    } else {
        video.muted = true;
        silenciar.value = '\uD83D\uDD0A';
    }
}

function accionMasVolumen() {
    if (video.volume < 1) {
        video.volume = video.volume + 0.2;
    }
    if (video.muted) {
        video.muted = false;
        video.volume = 0.2;
    }
}

function accionMenosVolumen() {
    if (video.volume > 0.001) {
        video.volume = video.volume - 0.2;
    }
}

function iniciar() {

    botonPlay = document.getElementById('botonPlay');
    reiniciar = document.getElementById('reiniciar');
    retrasar = document.getElementById('retrasar');
    adelantar = document.getElementById('adelantar');
    silenciar = document.getElementById('silenciar');

    botonPlay.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);

$(document).ready(function() { //Cargamos primero la pagina y los videos
// Barra de flujo del Video
progressBar  = document.getElementById('progress-bar');
video = document.getElementById('video');
video.addEventListener('timeupdate', updateProgressBar, false); // timeupdate evento que salta cada vez que cambia el tiempo del video
progressBar.addEventListener("click", seek); //Cambia el tiempo de reproducion del video cuando pulsamos la barra

function seek(e) {
  var percent = e.offsetX / this.offsetWidth;
  video.currentTime = percent * video.duration;
  e.target.value = Math.floor(percent / 100);
  e.target.innerHTML = progressBar.value + '% played';
}
function updateProgressBar() {
  // Calcula el tiempo que se a reproducido 
  var percentage = Math.floor((100 / video.duration) * video.currentTime);
  // Actualiza la barra de tiempo de reproducion del video
  progressBar.value = percentage;

  progressBar.innerHTML = percentage + '% played';
}
});
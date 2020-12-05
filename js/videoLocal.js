/*function comenzar() {

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
*/

$(function() {
    $('#selector').on('change', function(){
        var URL = window.URL || window.webkitURL;
        var file = this.files[0]
        var type = file.type
        var videoNode = document.querySelector('video')

        var fileURL = URL.createObjectURL(file)
        videoNode.src = fileURL
        
    });
});
contador = 0;

function CambiaVideo() { /*Para cambiar el video */
    console.log("Hola");
    if (contador == 0) {
        var video = $("#demo").attr("src", "C:/Users/User/Downloads/videoOnline.mp4");
    } else {
        var video = $("#demo").attr("src", "C:/Users/User/Downloads/videoOnline (" + contador + ").mp4");
    }
    contador++;
}
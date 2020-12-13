contador = 0;

function CambiaVideo() { /*Para cambiar el video */
    console.log("Hola");
    if (contador == 0) {
        var video = $("#demo").attr("src", "C:/Users/User/Downloads/videoOnline.mp4");
        console.log("Hola2");
    } else {
        var video = $("#demo").attr("src", "C:/Users/User/Downloads/videoOnline (" + contador + ").mp4");
        console.log("Hola3");
    }
    contador++;
}
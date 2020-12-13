function CambiaVideo(idVideo){ /*Para cambiar el video con los botones de la lista*/
  var video=$("#video").attr("src","videos/video"+idVideo+".mp4")
}

$(document).ready(function() { //Cargamos primero la pagina y los videos

var preguntaRespondida=false;//video interactivo 2
var preguntaRespondidav2 =false;
var preguntaRespondidav3 =false;
var preguntaRespondida1=false;//video interactivo 3

function compruebaTiempo() {/*Funciones interactivas de los videos*/
 
  var video = document.getElementById('video');

  if($(".video").get(0).currentSrc.includes("1-interactivo")){ //Interacion Video Interactivo1
    $('.botones').removeAttr('disabled')
    $(".textoverlay").css("display", "block")
    if(video.currentTime>=3 && video.currentTime<7){
      $(".textoverlay").html("Los erizos son pequeños mamíferos cubiertos de púas");
    }else if(video.currentTime>=28 && video.currentTime<32){
      $(".textoverlay").html("El erizo posee entre 5000 y 7000 púas");
    }else if(video.currentTime>=72 && video.currentTime<76){
      $(".textoverlay").html("Las puas de los erizos son pelos huecos que van rellenos de queratina");
    }else{
      $(".textoverlay").html("");
    }
    
    if(video.currentTime+15 >= video.duration){
      $("#reiniciaVideo").css("display","block");
    }else{
      $("#reiniciaVideo").css("display","none");
    }
  }


  if($(".video").get(0).currentSrc.includes("2-interactivo")){ //Interacion Video Interactivo2
    if(video.currentTime>=18 && video.currentTime<24 ){
      if(!preguntaRespondida){
        video.pause();
        $(".textoverlay").css("display", "block")
        $(".textoverlay").html("¿Que fruta es?");
        $(".botonPantalla").css("display","block");
        $('.botones').attr('disabled', 'disabled')
      }
      $("#respuesta2").on('click', function(event){ //El evento se produce cuando pulsa el boton correcto
        event.stopPropagation();
        event.stopImmediatePropagation();
       $(".botonPantalla").css("display","none");
       $(".textoverlay").html("Has pulsando respuesta correcta");
       $('.botones').removeAttr('disabled')
       video.play();
       preguntaRespondida=true;
    });
    
    $("#respuesta1,#respuesta3,#respuesta4").on('click', function(event){ //El evento se produce cuando no pulsa el boton correcto
        event.stopPropagation();
        event.stopImmediatePropagation();
       $(".botonPantalla").css("display","none");
       $(".textoverlay").html("Has pulsando respuesta INCORRECTA");
       $('.botones').removeAttr('disabled')
       video.play();
       preguntaRespondida=true;
    });
    }else{
      $(".textoverlay").html("");
      $(".textoverlay").css("display", "none")
      preguntaRespondida=false;
    }

    if(video.currentTime>=48 && video.currentTime<54 ){
      if(!preguntaRespondidav2){
        video.pause();
        $(".textoverlay2").css("display", "block")
        $(".textoverlay2").html("¿De que color es la fruta?");
        $(".botonPantalla2").css("display","block");
        $('.botones').attr('disabled', 'disabled')
      }
      $("#respuesta5video2").on('click', function(event){ //El evento se produce cuando pulsa el boton correcto
        event.stopPropagation();
        event.stopImmediatePropagation();
       $(".botonPantalla2").css("display","none");
 
       $(".textoverlay2").html("Has pulsando respuesta correcta");
       $('.botones').removeAttr('disabled')
       video.play();
       preguntaRespondidav2=true;
    });
    
    $("#respuesta6,#respuesta7,#respuesta8").on('click', function(event){ //El evento se produce cuando no pulsa el boton correcto
        event.stopPropagation();
        event.stopImmediatePropagation();
       $(".botonPantalla2").css("display","none");
       $(".textoverlay2").html("Has pulsando respuesta INCORRECTA");
       $('.botones').removeAttr('disabled')
       video.play();
       preguntaRespondidav2=true;
    });
    }else{
      $(".textoverlay2").html("");
      $(".textoverlay2").css("display", "none")
      preguntaRespondidav2=false;
    }

    if(video.currentTime>=78 && video.currentTime<84 ){
      if(!preguntaRespondidav3){
        video.pause();
        $(".textoverlay3").css("display", "block")
        $(".textoverlay3").html("¿Que contiene esta fruta?");
        $(".botonPantalla3").css("display","block");
        $('.botones').attr('disabled', 'disabled')
      }
      $("#respuesta12").on('click', function(event){ //El evento se produce cuando pulsa el boton correcto
        event.stopPropagation();
        event.stopImmediatePropagation();
       $(".botonPantalla3").css("display","none");
 
       $(".textoverlay3").html("Has pulsando respuesta correcta");
       $('.botones').removeAttr('disabled')
       video.play();
       preguntaRespondidav3=true;
    });
    
    $("#respuesta9,#respuesta10,#respuesta11").on('click', function(event){ //El evento se produce cuando no pulsa el boton correcto
        event.stopPropagation();
        event.stopImmediatePropagation();
       $(".botonPantalla3").css("display","none");
       $(".textoverlay3").html("Has pulsando respuesta INCORRECTA");
       $('.botones').removeAttr('disabled')
       video.play();
       preguntaRespondidav3=true;
    });
    }else{
      $(".textoverlay3").html("");
      $(".textoverlay3").css("display", "none")
      preguntaRespondidav3=false;
    }


  }else{
    $(".botonPantalla").css("display","none");
  }

  
  

  if($(".video").get(0).currentSrc.includes("3-interactivo")){ //Interacion Video Interactivo3
    if(video.currentTime>=18 && video.currentTime<21){
      if(!preguntaRespondida1){
        video.pause();
        $(".textoverlay").css("display", "block")
        $(".textoverlay").html("¿De que color es el Kayak de la izquierda?");
        $(".botonRespuesta").css("display","block");
      }
      $("#respuesta5").on('click', function(event){
        event.stopPropagation(); //Evita que se ejecuten los controladores de eventos principales.
        event.stopImmediatePropagation(); //Si varios oyentes están unidos al mismo elemento para el mismo tipo de evento, se llaman en el orden en que se añadieron.
       $(".botonRespuesta").css("display","none");
       if($("#respuestaTexto").val().toLowerCase() == "azul"){ //Comprueba que la respuesta es correcta aunque se escriba en mayusculas
        $(".textoverlay").html("Respuesta correcta!");
       }else{
        $(".textoverlay").html("Respuesta INCORRECTA!");
       }
       video.play();
       preguntaRespondida1=true;
    });

    }else{
      $(".textoverlay").html("");
      $(".textoverlay").css("display", "none")
      preguntaRespondida1=false;
    }

    if(video.currentTime>=30 && video.currentTime<35){
      $(".imagenKayak").css("display","block");
      $(".textoReserva").css("display", "block")
      $(".textoReserva").html("¿Quieres probar?"); 
    }else{
      $(".imagenKayak").css("display","none");
      $(".textoReserva").css("display", "none")
      $(".textoReserva").html("");
    }

    if(video.currentTime>=5 && video.currentTime<9){
      $(".enlace1").css("display","block");
      $(".enlace1").html("¿Que es el Kayak?"); 
    }else{
      $(".enlace1").css("display","none");
      $(".enlace1").html("");
    }
  }
}
var timer = setInterval(compruebaTiempo, 1000); /*Ejecuta la funcion compruebaTiempo cada segundo*/

});

function reiniciaVideo() { /* Funcion para volver al inicio del video2 */
  var video = document.getElementById('video');
  video.currentTime=0;
}


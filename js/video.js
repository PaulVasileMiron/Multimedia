ite =5;
function accionPlay() { 
    var reproducir=document.getElementById('botonPlay');
    if(!video.paused && !video.ended)   { 
        video.pause(); 
        reproducir.value ='Reproducir';
        //botonPlay.value='\u25BA'; //\u25BA  
    } 
    else 
    {
        video.play(); 
        reproducir.value ='Pausa';
        //botonPlay.value='||';
    } 
}   

function accionReiniciar()
{
    var reproducir=document.getElementById('botonPlay');
  
    video.currentTime=0;
    video.play();
    reproducir.value='Pausa';
}
function accionRetrasar()
{
    if(video.currentTime>3){
        video.currentTime=video.currentTime-3;
    }
    if(video.currentTime<3 && video.currentTime>0){
        video.currentTime=0;
    }
}
function accionAdelantar()
{
    if(video.currentTime<video.duration-3){
        video.currentTime=video.currentTime+3;
    }
    if(video.currentTime>video.duration-3 && video.currentTime<video.duration){
        video.currentTime=video.duration;
    }
}
function accionSilenciar()
{
    
    if (video.muted) {
        video.muted = false;
    }else{
        video.muted = true;
    }
      
}
function accionMasVolumen()
{console.log("Pulso");//console.log(video.volume);

    /*if(ite<5){
        ite++;
    }
    if(ite==5){
        video.volume=1;
    }
    if(ite==4){
        video.volume=0.8;
    }
    if(ite==3){
        video.volume=0.6;
    }
    if(ite==2){
        video.volume=0.4;
    }
    if(ite==1){
        video.volume=0.2;
    }*/
    
    if(video.volume<1){ 
        video.volume= video.volume+0.2;console.log("Entro");//console.log(video.volume);
    }
}
function accionMenosVolumen()
{console.log("Pulso");//console.log(video.volume);
    /*if(ite>0){
        ite--;
    }
    if(ite==4){
        video.volume=0.8;
    }
    if(ite==3){
        video.volume=0.6;
    }
    if(ite==2){
        video.volume=0.4;
    }
    if(ite==1){
        video.volume=0.2;
    }
    if(ite==0){
        video.volume=0;
    }*/
    
    if(video.volume>0.001){
        video.volume= video.volume-0.2;console.log("Entro");//console.log(video.volume);
    }
}

function iniciar() 
{
	
	medio=document.getElementById('video');
	botonPlay=document.getElementById('botonPlay');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	botonPlay.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);


    
  
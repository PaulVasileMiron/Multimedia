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


function CambiaVideo(){ /*Para cambiar el video */
    var video=$("#demo").attr("src","C:/Users/User/Downloads/videoOnline.mp4");
    //"C:/Users/User/Desktop/online/videoOnline.mp4"
    //console.log(video);
}
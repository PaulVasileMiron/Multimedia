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

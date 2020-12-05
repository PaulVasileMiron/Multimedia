$(function() {
    $('#selector').on('change', function(){
        
        var url = $('#demo').attr('src', ($("#selector").val())+"&output=embed");
        
    });
});




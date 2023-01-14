$(function(){

    var header = $('#header');
    header.hide();

    $(window).scroll(function(){
        var sct = $(this).scrollTop();
        if(sct>950){
            header.show(); 
        } else{
            header.hide(); 
        }
    });
});
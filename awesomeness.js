$(document).ready(function() {
   
    $(window).scroll(function() {
        $("#logo").each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow - 400) {
                $("#mini-logo").fadeIn(1000);
            } else if (imagePos > topOfWindow - 400) {
                $("#mini-logo").fadeOut(1000);
            } 
        })
        
    })
    
});
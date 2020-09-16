$(window).scroll(function(){
    if($(this).scrollTop() > 30) 
    {
        $('.navbar-trans').addClass('opaque');
    } else {
        $('.navbar-trans').removeClass('opaque');
    }
});

$(document).ready(function(){
    $('#zoom').hover(function() {
        $("#zoom").addClass('zoom');
    
    }, function() {
        $("#zoom").removeClass('zoom');
    });
});
$(document).ready(function(){
    $('#zoom2').hover(function() {
        $("#zoom2").addClass('zoom2');
    
    }, function() {
        $("#zoom2").removeClass('zoom2');
    });
});

$(document).ready(function(){
    $('#zoom3').hover(function() {
        $("#zoom3").addClass('zoom3');
    
    }, function() {
        $("#zoom3").removeClass('zoom3');
    });
});

$(document).ready(function(){
    $('#zoom4').hover(function() {
        $("#zoom4").addClass('zoom4');
    
    }, function() {
        $("#zoom4").removeClass('zoom4');
    });
});

btt = document.getElementById("btt");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btt.style.display = "block";
    } 
    else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
        btt.style.display = "none";
    }
    else {
        btt.style.display = "none";
    }
}
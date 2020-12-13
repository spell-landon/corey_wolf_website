
/*  SET THE HEIGHT ON PAGE-LOAD  */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh',`${vh}px`);

/*  RESETS PAGE TO TOP OF DOCUMENT WHEN REFRESHED  */
$(document).ready(function(){
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);
 });
});


/*  NAVIGATION BAR FADE OUT-IN ON SCROLL  */

$(document).ready(function() {
    var previousScroll = 0;

    $(window).scroll(function(){
       var currentScroll = $(this).scrollTop();
       if (currentScroll >= previousScroll) {
    	   //Direction: Down
    	   $(".topnav").fadeOut();
       } else {
    	   //Direction: Up
    	   $(".topnav").fadeIn();
       }

       previousScroll = currentScroll;
       
    });
});


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

/*  INDIVIDUAL PROJECTS SECTION FADE IN ON SCROLL  */
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".individual_projects")
    
    for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    
    if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
    } else {  
        $(tag).removeClass("visible")
    }
    
    }
    })
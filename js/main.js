$(document).ready(function(){

    //  Navigation Change on Scroll *********************************
    // --------------------------------------------------------------
    $(window).scroll(function() {
        var windowScroll = $(window).scrollTop();
        if (windowScroll >= 648) {
            $('nav, section.hero').addClass('stickyNav');
        } else {
            $('nav, section.hero').removeClass('stickyNav');
        }
    });

    //  Auto-updating Copyright Year ********************************
    // --------------------------------------------------------------
    $('footer .varContent').text(new Date().getFullYear()); 

    // Resume Header Content Switcher - (Meter Elements) ************
    // --------------------------------------------------------------
    $('.contentSwitcher .meter').mouseover(function() {
        if( !$(this).hasClass('active') ){
            $(".meter").removeClass('active');
            $(this).addClass('active');
        };
    });


    $("#AntaresItems").roll();
    $("#PeelRevealItems").roll();
    $("#RevSolutionItems").roll();
    $("#eGovItems").roll();
    $("#TaxWebItems").roll();
    $("#FranklinPCItems").roll();
    $("#GamingSummitItems").roll();
    $("#AppMailerItems").roll();
    $("#PGKAPostcardItems").roll();
    $("#PGKAInvitationalItems").roll();
    $("#PGKAWebItems").roll();
    $("#LogosItems").roll();
    $("#CDPItems").roll();
    $("#LecturePostersItems").roll();

});

/*
//  Navigation Change on Scroll *********************************
// --------------------------------------------------------------
$(window).scroll(function() {
    var windowScroll = $(window).scrollTop();
    if (windowScroll >= 648) {
        $('nav, section.hero').addClass('stickyNav');
    } else {
        $('nav, section.hero').removeClass('stickyNav');
    }
});

//  Auto-updating Copyright Year ********************************
// --------------------------------------------------------------
$(document).ready(function() {
	$('footer .varContent').text(new Date().getFullYear()); 
});


// Resume Header Content Switcher - (Meter Elements) ************
// --------------------------------------------------------------
$(document).ready(function() {
	$('.contentSwitcher .meter').mouseover(function() {
		if( !$(this).hasClass('active') ){
			$(".meter").removeClass('active');
			$(this).addClass('active');
        };
    });
});
*/
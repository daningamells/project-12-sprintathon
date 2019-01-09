$(document).ready(function(e) {

    // Add mobile class if required
    mobile();

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

    // Total raised from team page
    var data = $.getJSON("https://api.justgiving.com/bd102912/v1/team/sprintathon2017", function() {
        var jsondata = jQuery.parseJSON(data.responseText);
        var total = jsondata.localRaisedSoFar;
        console.log(data);

		//$('.total-raised .amount .total').text(numberWithCommas(50000-(total+22500)));
		$('.total-raised .amount .total').text('0');
    });

		var team1name = "Facebook Sprintathon Team 2017";
		var team1img = "img/teamfacebook.png";
		var total2 = false;
		var team2name = "Google team's sprintathon quest!";
		var team2img = "img/teamgoogle.png";
		var total3 = false;
		var team1link = "https://www.justgiving.com/fundraising/facebook-sprintathon-2017";
		var team2link = "https://www.justgiving.com/fundraising/googleteam1";

		var data2 = $.getJSON("https://api.justgiving.com/bd102912/v1/fundraising/pages/facebook-sprintathon-2017", function() {
			var jsondata2 = jQuery.parseJSON(data2.responseText);
			total2 = jsondata2.grandTotalRaisedExcludingGiftAid;
			//$('.team1total').text(numberWithCommas(total2));
			var data3 = $.getJSON("https://api.justgiving.com/bd102912/v1/fundraising/pages/googleteam1", function() {
				var jsondata3 = jQuery.parseJSON(data3.responseText);
				total3 = jsondata3.grandTotalRaisedExcludingGiftAid;

				//$('.team2total').text(numberWithCommas(total3));
				if(total2>=total3) {
					$('.win .thumbnail').attr('src',team1img);
					$('.win .namelabel').html(team1name);
					$('.team1total').text(numberWithCommas(total2));
					$('.win .cta').attr('href',team1link);
					$('.lose .thumbnail').attr('src',team2img);
					$('.lose .namelabel').html(team2name);
					$('.team2total').text(numberWithCommas(total3));
					$('.lose .cta').attr('href',team2link);
				} else {
					$('.win .thumbnail').attr('src',team2img);
					$('.win .namelabel').html(team2name);
					$('.team1total').text(numberWithCommas(total3));
					$('.win .cta').attr('href',team2link);
					$('.lose .thumbnail').attr('src',team1img);
					$('.lose .namelabel').html(team1name);
					$('.team2total').text(numberWithCommas(total2));
					$('.lose .cta').attr('href',team1link);
				}
			});
		});



    // Get data from each event page (JustGiving API)
    // var data = $.getJSON("https://api.justgiving.com/bd102912/v1/event/4023572/pages", function() {
    //     var jsondata = jQuery.parseJSON(data.responseText);
    //     var page = jsondata.fundraisingPages;
    //
    //       console.log(jsondata);
    //     //   console.log(page);
    //
    //     // Set total raised variable
    //     var total = 0;
    //
    //     // Loop through each page contents
    //     for (i = 0; i < page.length; i++) {
    //         var rivalWrap = document.getElementById('rivals-wrap');
    //         // After every two results peform this action
    //         // Start after first element and repeat every two
    //         if ( i && (i % 2 === 1)) {
    //             var vsElement = document.createElement('div');
    //             vsElement.className = "vs";
    //             vsElement.innerHTML = "VS";
    //             rivalWrap.appendChild(vsElement);
    //         }
    //         console.log(page[i].pageTitle);
    //         var newElement = document.createElement('div');
    //         // Get the page raised amount
    //         var raised = page[i].raisedAmount;
    //         var pageShortName = page[i].pageShortName;
    //         // Add page amount to total raised
    //         total += raised;
    //         newElement.className = "page";
    //         newElement.innerHTML = "<div class='title'>" + page[i].pageTitle + "</div><div class='raised-amount'>Raised: £" + raised + "</div><a class='btn' target='_blank' href='http://www.justgiving.com/fundraising/" + pageShortName + "'>Donate Here</a>";
    //         rivalWrap.appendChild(newElement);
    //     }
    //
    //     // Console log the total raised from all pages
    //     console.log('this is the total ' + total);
    //     // Update total
    //     $('.total-raised .amount .total').text(total);
    //
    // });

    // Scroll to section
    $(".nav a").click(function (){
        // Get the panel ID
        var panel = $(this).data('panel');
        // Go to panel
        $('html, body').animate({
            scrollTop: $("#" + panel).offset().top
        }, 1000);
    });

var video = document.getElementsByTagName("video")[0];

$('.play-btn').on('click', function(e) {
	ga('send', 'event', 'Video', 'Play', 'Lightbox Open');
	//console.log('start video');
    $('#popup').addClass('show');
	$('.arrow').css('display','none');
    video.play();
});
$('.close-btn').on('click', function(e) {
	ga('send', 'event', 'Video', 'Stop', video.currentTime);
	//console.log('stop video');
    $('#popup').removeClass('show');
	$('.arrow').css('display','block');
    video.pause();
});

video.addEventListener('ended',myHandler,false);
    function myHandler(e) {
        // What you want to do after the event
		ga('send', 'event', 'Video', 'Ended', 'Natural');
		$('#popup').removeClass('show');
		$('.arrow').css('display','block');
}

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
});


});

// Accordion toggle
var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = ('ontouchstart' in window),
    pointerSupported = ('pointerdown' in window);

skipClickDelay = function(e) {
    e.preventDefault();
    e.target.click();
}

setAriaAttr = function(el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
};
setAccordionAria = function(el1, el2, expanded) {
    switch (expanded) {
        case "true":
            setAriaAttr(el1, 'aria-expanded', 'true');
            setAriaAttr(el2, 'aria-hidden', 'false');
            break;
        case "false":
            setAriaAttr(el1, 'aria-expanded', 'false');
            setAriaAttr(el2, 'aria-hidden', 'true');
            break;
        default:
            break;
    }
};
switchAccordion = function(e) {
    console.log("triggered");
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if (thisAnswer.classList.contains('is-collapsed')) {
        setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
        setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');

    thisAnswer.classList.toggle('animateIn');
};
for (var i = 0, len = accordionToggles.length; i < len; i++) {
    if (touchSupported) {
        accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if (pointerSupported) {
        accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
}

// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $lines = $('.lines');
    var $flames = $('.flames');
    // var $trainers = $('.trainers');

    // If the animation has already been started
    // if ($lines.hasClass('start')) return;
    if (isElementInViewport($lines)) {
        // Start the animation
        $lines.addClass('start');
    }
    // if ($flames.hasClass('start')) return;
    if (isElementInViewport($flames)) {
        // Start the animation
        $flames.addClass('start');
    }
    // if (isElementInViewport($trainers)) {
    //     // Start the animation
    //     $trainers.addClass('start');
    // }
}

// Number animation
function numberAnimation() {
    $('.number').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

// Add mobile class
function mobile() {
    // Get viewport width
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(w < 1024) {
        $('body').addClass('mobile');
    } else {
        $('body').removeClass('mobile');
    }
}

// Capture scroll events
var executed = false; // Set executed variable
$(window).on('scroll', function() {
    checkAnimation();
    var $number = $('.number');
    if (isElementInViewport($number) && !executed) {
        numberAnimation();
        executed = true; // Set to true to prevent function from running again
    }
});

// Capture resize events
$(window).on('resize', function() {
    mobile();
});

// Toggle mobile menu
$('.mobile-menu').on('click', function(e) {
    $('body').toggleClass('menu-active');
    return false;
})

$('.nav-items a').on('click', function(e) {
    $('body').removeClass('menu-active');
    return false;
})

// Show all rivals
$(".show-more").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('#rivals-wrap').slideToggle();
});

// Scroll to next panel on arrow click
$(".arrow").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".intro").offset().top
    }, 1000);
});

var video = document.getElementsByTagName("video")[0];
$('.play-btn').on('click', function(e) {
    $('#popup').addClass('show');
    video.play();
});
$('.close-btn').on('click', function(e) {
    $('#popup').removeClass('show');
    video.pause();
});

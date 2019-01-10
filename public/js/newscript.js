// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});


$('#html5-videos').lightGallery({
              download: false,
              showAfterLoad: true,
              autoplay: true,
              share: false,
              thumbnail: false,
              fullScreen: true,
              pager: false,
              zoom: false,


              
          });



$('#autoplay').lightSlider({
  prevHtml: '<img src="/images/sprintathon_carousel-red arrow.svg">',
   nextHtml: '<img class="right-arrow" src="/images/sprintathon_carousel-red arrow.svg">',
   slideMargin:10,
  item:3,
  loop:false,
  slideMove:2,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  responsive : [
    {
        breakpoint:1100,
        settings: {
            item:2,
            slideMove:1,
            slideMargin:6,
          }
    },
      {
          breakpoint:750,
          settings: {
              item:2,
              slideMove:1,
              slideMargin:6,
            }
      },
      {
          breakpoint:480,
          settings: {
              item:1,
              slideMove:1
            }
      }
  ]
});

$( '.video-gallery' ).each(function() {
  $( this ).lightGallery({
                download: false,
                showAfterLoad: true,
                autoplay: true,
                share: false,
                thumbnail: false,
                fullScreen: false,
                pager: false,
                zoom: false
            });


});






$('#beat-link').click(function(event) {
    var offset = 65;
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});


$('#how-link').click(function(event) {
    var offset = 65;
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});

$('#who-link').click(function(event) {
    var offset = 65;
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});

$('#faq-link').click(function(event) {
    var offset = 0;
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
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


$(function(){
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
         hamburger.classList.toggle("is-active");
     });
 });




 function numberWithCommas(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }

   // Total raised from team page
   var data = $.getJSON("https://api.justgiving.com/bd102912/v1/team/sprintathon2017", function() {
       var jsondata = jQuery.parseJSON(data.responseText);
       var total = jsondata.localRaisedSoFar;

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

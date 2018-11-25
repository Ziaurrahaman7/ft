// for_header bgColor
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 50) {
	    $(".header").css("background" , "rgba(0, 0, 0, 0.8)");
	    $(".logo").css("padding-top" , "10px");
	    $(".main_menu").css("padding-top" , "5px");
	    $(".collapse_bar").css("margin-top" , "11px");
	    $(".header").css("height" , " 80px");
		
	  }

	  else{  
		  $(".header").css("background" , "none");	  
		  $(".logo").css("padding-top" , "none");	  
		  $(".collapse_bar").css("margin-top" , "none");	  
		  $(".main_menu").css("padding-top" , "none");	  
		  $(".header").css("box-shadow" , "none");		  
	  }
  })
})
// Bootstrap Scroll Spy //
       
         
    $("body").scrollspy({
        target: "#mymenu",
        offset: 100
    });
    
// nav_menu fade-scroll
$(".nav a").on('click', function () {
        $("#mymenu").removeClass("in").addClass("collapse");
    });

$(".navbar-nav li a, .navbar-brand, .button a").on("click", function (z) {
        var anchor = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(anchor.attr("href")).offset().top - 60
        }, 1000);
        z.preventDefault();
    });
    
// counter
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// pentag
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
// magnify
var groups = {};
$('.galleryItem').each(function() {
  var id = parseInt($(this).attr('data-group'), 10);
  
  if(!groups[id]) {
    groups[id] = [];
  } 
  
  groups[id].push( this );
});


$.each(groups, function() {
  
  $(this).magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: { enabled:true }
  })
  
});
	
// owl slider			
			
			
			$(document).ready(function() {
              $('.owl-carousel').owlCarousel({
				animateIn: 'bounceIn',
                animateOut: 'bounceIn',
                items: 1,
				loop: true,
                margin: 30,
                stagePadding: 30,
                smartSpeed:300,
				autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true,
                responsiveClass: true,
                responsive: {
                 0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  2000: {
                    items: 1,
                    nav: true,
                    loop: false,
                    margin: 20
                  }
                }
              })
            })
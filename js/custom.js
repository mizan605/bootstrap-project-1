
 var container = document.querySelector('.gallery');
var mixer = mixitup(container, {
    selectors: {
        control: '[our-mix-control]'
    }   
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	  autoplay:true,
	  autoplayTimeout:2000,
	  loop:true,
	      responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }	
  });
});


/*Top scroll*/

$('.top').click(function(){
	$("html, body").animate({
		scrollTop:0,
	},2000);	
});

$('.top').hide();

$(window).scroll(function(){
	var ourwindow= $(this).scrollTop();
	
	if(ourwindow<1000){
		$('.top').fadeOut();
	}else{
		$('.top').fadeIn();
	}
	
	//Menu fixed
	if(ourwindow>100){
		$('body').addClass('fixed');
	}else{
		$('body').removeClass('fixed');
	}
});

/*navbar Active*/

$('.navbar-nav li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
});


/* a href scroll off */

$('.navbar-nav a[href^="#"]').click(function(e){
	e.preventDefault();
	
	var target = this.hash;
	
	$('html, body').animate({
		scrollTop: $(target).offset().top -70,
	},500);
});















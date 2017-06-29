$(document).ready(function() {

  /***************** Waypoints ******************/

    $('.animation1').waypoint(function() {
    $('.animation1').addClass('animated fadeInRight');
  }, {
    offset: '75%'
  });
  $('.animation2').waypoint(function() {
    $('.animation2').addClass('animated zoomIn');
  }, {
    offset: '75%'
  });
  $('.animation3').waypoint(function() {
    $('.animation3').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });

  
});

		$('.progress-bar').waypoint(function() {
		$('.progress-bar').css({ 
        animation: "animate-positive 2s",
        opacity: "1"
        
      });
}, { offset: '75%' });

	



	

	




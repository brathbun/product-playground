$(document).ready(function(){

	$('.expand').click(function(){

		$( "#adpic" ).animate({
		    opacity: 1.0,
		    height: "250px"
		  }, 500, function() {
		    // Animation complete.
		  });

		$( "#adframe" ).animate({
		    height: "505px"
		  }, 500, function() {
		    // Animation complete.
		  });

		$( "#nativead" ).animate({
		    height: "550px"
		  }, 500, function() {
		    // Animation complete.
		  });

		$('.expand').css('display', 'none');
		$('.collapse').css('display', 'block');

	});

	$('.collapse').click(function(){
		$( "#adpic" ).animate({
		    opacity: 0.35,
		    height: "85px"
		  }, 500, function() {
		    // Animation complete.
		  });

		$( "#adframe" ).animate({
		    height: "230px"
		  }, 500, function() {
		    // Animation complete.
		  });

		$( "#nativead" ).animate({
		    height: "275px"
		  }, 500, function() {
		    // Animation complete.
		  });

		$('.expand').css('display', 'block');
		$('.collapse').css('display', 'none');		
	});

});

$(document).ready(function(){

	$('#slidecontainer').css('display', 'block');
 	
 	containerheight = $('#slidecontainer').height();

   	$('#slidecontainer').css('bottom', '-'+ containerheight +'px');
  
 	$('.close').click(function(){
 		$('#slidecontainer').fadeOut('slow');
 	});

});

$( window ).resize(function() {
	
	containerheight = $('#slidecontainer').height();
   	$('#slidecontainer').css('bottom', '-'+ containerheight +'px');

}).trigger('resize');



$( window ).scroll( function() {

	height = $( document ).height();
	launchheight = height / 6;
	windowheight = $( window ).scrollTop();
		
	adheight = $('#slidecontainer').height();
	bottom = parseInt($('#slidecontainer').css('bottom'));
	top = $('#slidecontainer').scrollTop();
	
	console.log('Ad Height: ' + adheight);
	
	if (windowheight >= launchheight) {
		$('body').addClass('stop-scrolling');
	
		if (windowheight > storewindowheight) {

			$('body').bind('touchmove', function(e){ e.preventDefault() });

			bottom = bottom + 10;
			$('#slidecontainer').css('bottom', ''+ bottom +'px');

		} else {

			$('body').bind('touchmove', function(e){ e.preventDefault() });
			
			bottom = bottom - 10;
			$('#slidecontainer').css('bottom', ''+ bottom +'px');
		}

		if ( bottom > windowheight ) {
			$('#slidecontainer').css('display', 'none');
			console.log('display none');
		}
	
	$('body').removeClass('stop-scrolling')
	$('body').unbind('touchmove');
	
	}

	storewindowheight = windowheight;
	scrollTop = $( window ).scrollTop();
	
});
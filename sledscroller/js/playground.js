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
	
	console.log('Ad Height: ' + adheight);
	console.log('Body Top: ' + windowheight );
	console.log('Bottom: ' + bottom);
	
	if (windowheight >= launchheight) {
		
		if (windowheight > storewindowheight) {
			
			bottom = bottom + 5;
			$('#slidecontainer').css('bottom', ''+ bottom +'px');

		} else {

			bottom = bottom - 5;
			$('#slidecontainer').css('bottom', ''+ bottom +'px');
		}

		if ( bottom > windowheight ) {
			$('#slidecontainer').css('display', 'none');
			console.log('display none');
		}

	}
	storewindowheight = windowheight;
	scrollTop = $( window ).scrollTop();
	
});
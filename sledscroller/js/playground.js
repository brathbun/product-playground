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



$( window ).scroll(function() {

	height = $( document ).height();
	windowheight = $( window ).scrollTop();
	launchheight = height / 6;
	
	adheight = $('#slidecontainer').height();
	bottom = parseInt($('#slidecontainer').css('bottom'));
	if (windowheight >= launchheight && adheight > bottom) {
		
		if (windowheight > storewindowheight) {
			
			console.log(bottom);
			bottom = bottom + 50;

			$( window ).css('overflow-y', 'hidden');
			$( window ).scrollTop(scrollTop);
			$( window ).css('overflow-y', 'auto');
			
			$('#slidecontainer').css('bottom', ''+ bottom +'px');
		} else {
			bottom = parseInt($('#slidecontainer').css('bottom'));
			console.log(bottom);
			bottom = bottom - 50;

			$( window ).css('overflow-y', 'hidden');
			$( window ).scrollTop(scrollTop);
			$( window ).css('overflow-y', 'auto');

			$('#slidecontainer').css('bottom', ''+ bottom +'px');
		}

		if ( adheight < bottom ) {
			$('#slidecontainer').css('display', 'none');
			console.log('display none');
		}

	}
	storewindowheight = windowheight;
	scrollTop = $( window ).scrollTop();
	console.log(adheight);
   	console.log( height + " " + windowheight + " " + launchheight);
	
});
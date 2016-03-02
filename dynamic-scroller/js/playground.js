$(document).ready(function(){

   $('#bottompanel').css('display', 'block');

   var botwidth = $('#bottompanel').width();
   var ratio = 90/1000;
   var botheight = botwidth * ratio;	   
   $('#bottompanel').css('height', ''+ botheight +'px');
   $('#bottombar').css('height', ''+ botheight +'px');

   var botexpwidth = $('#bottomexp').width();
   var ratio = 225/1000;
   var botexpheight = botexpwidth * ratio;	   
   $('#bottomexp').css('height', ''+ botexpheight +'px');

	tswitch = 1;
 	$('.close').click(function(){
 		$('#bottomexp').slideUp('slow');
 		$('#bottompanel').slideUp('slow');
 		tswitch = 0;
 	});

});

$( window ).resize(function() {
	var width = $(window).width();

	   $('#bottompanel').css('display', 'block');

	   var botwidth = $('#bottompanel').width();
	   var ratio = 90/1000;
	   var botheight = botwidth * ratio;	   
	   $('#bottompanel').css('height', ''+ botheight +'px');
	   $('#bottombar').css('height', ''+ botheight +'px');

	   var botexpwidth = $('#bottomexp').width();
	   var ratio = 225/1000;
	   var botexpheight = botexpwidth * ratio;	   
	   $('#bottomexp').css('height', ''+ botexpheight +'px');

}).trigger('resize');



$( window ).scroll(function() {
	height = $( document ).height();
	launchheight = height / 2;
	windowheight = $( window ).scrollTop();
	percentage = windowheight / launchheight * 100;
	$( "#bottombar" ).css( "width", percentage+"%" );
	console.log( launchheight + " " + windowheight + " " + percentage);
  	if (tswitch == 1) {
		if( percentage >= 100 ) {
	 		$('#bottomexp').slideDown('slow');
	 		$('#bottompanel').slideUp('slow');
	  	}
  	}
  	
});
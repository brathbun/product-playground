$(document).ready(function(){

	var width = $(window).width();

	if (width > '1300') {
	   $('#leftpanel').css('display', 'block');
	   $('#rightpanel').css('display', 'block');
	   $('#toppanel').css('display', 'none');
	   $('#bottompanel').css('display', 'none');
	   $('#bottomexp').css('display', 'none');
	}	

	if (width < '1300') {
	   $('#leftpanel').css('display', 'none');
	   $('#rightpanel').css('display', 'none');
	   var topwidth = $('#toppanel').width();
	   var ratio = 60/1000;
	   var topheight = topwidth * ratio;
	   $('#toppanel').css('height', ''+ topheight +'px');	   
	   $('#toppanel').slideDown( "slow" );

	   var botwidth = $('#bottompanel').width();
	   var ratio = 90/1000;
	   var botheight = botwidth * ratio;	   
	   $('#bottompanel').css('height', ''+ botheight +'px');

	   var botexpwidth = $('#bottomexp').width();
	   var ratio = 225/1000;
	   var botexpheight = botexpwidth * ratio;	   
	   $('#bottomexp').css('height', ''+ botexpheight +'px');	   
	}

	if (width < '500') {
	   $('#bottompanel').html('<img CssClass="botimage" src="img/skinbottom_col2.jpg" width="100%" />');
	}

	if (width >= '500') {
	   $('#bottompanel').html('<img CssClass="botimage" src="img/skinbottom_col.jpg" width="100%" />');
	}	

 	$('#bottompanel').click(function(){
 		$('#bottomexp').slideDown('slow');
 		$('#bottompanel').slideUp('slow');
 	});

 	$('#bottomexp').click(function(){
 		$('#bottomexp').slideUp('slow');
 		$('#bottompanel').slideDown('slow');
 	}); 	

});

$( window ).resize(function() {
	var width = $(window).width();

	if (width > '1300') {
	   $('#leftpanel').css('display', 'block');
	   $('#rightpanel').css('display', 'block');
	   $('#toppanel').css('display', 'none');
	   $('#bottompanel').css('display', 'none');
	   $('#bottomexp').css('display', 'none');
	}	

	if (width < '1300') {
	   $('#leftpanel').css('display', 'none');
	   $('#rightpanel').css('display', 'none');
	   $('#toppanel').css('display', 'block');
	   $('#bottompanel').css('display', 'block');

	   var topwidth = $('#toppanel').width();
	   var ratio = 60/1000;
	   var topheight = topwidth * ratio;

	   $('#toppanel').css('height', ''+ topheight +'px');

	   var botwidth = $('#bottompanel').width();
	   var ratio = 90/1000;
	   var botheight = botwidth * ratio;	   
	   $('#bottompanel').css('height', ''+ botheight +'px');

	   var botexpwidth = $('#bottomexp').width();
	   var ratio = 225/1000;
	   var botexpheight = botexpwidth * ratio;	   
	   $('#bottomexp').css('height', ''+ botexpheight +'px');
	}

	if (width < '500') {
	   $('#bottompanel').html('<img CssClass="botimage" src="img/skinbottom_col2.jpg" width="100%" />');
	}

	if (width >= '500') {
	   $('#bottompanel').html('<img CssClass="botimage" src="img/skinbottom_col.jpg" width="100%" />');
	}

});
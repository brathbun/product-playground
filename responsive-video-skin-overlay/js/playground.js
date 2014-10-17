$(document).ready(function(){

	$('#bottomad').fadeTo( 100, .4);
	$('#topad').fadeOut( 100 );

	$('#bottomad').mouseenter(function(){
		//$('#bottomad').on('mouseover', function() { return false; });
		$('#topad').stop().fadeTo( 200, 1.0);
		//$('#bottomad').css('z-index', 5).fadeTo( 300, 0.0);
	});

	$('#bottomad').mouseleave(function(){
		$('#topad').stop().fadeOut( 200 );
		//$('#bottomad').css('z-index', 1).fadeTo( 300, 0.4);
	});

	//$('#bottomad').click(function(){
	//	window.open('http://www.frostedflakes.com', '_blank');
	//});

});
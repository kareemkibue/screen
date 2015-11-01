$(document).ready(function() {
	renderViewport();	
});

$(window).resize(function() {
	renderViewport();
});

function renderViewport(){
	var dimensions = getWidth() + ' <span>x</span> ' + getHeight() + '';
	$('#content').html( dimensions );	

	function getWidth(){
		return $(window).width();
	}

	function getHeight(){
		return $(window).height();
	}
}
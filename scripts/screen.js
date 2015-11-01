$(document).ready(function() {
	renderInfo();	
});

$(window).resize(function() {
	renderInfo();
});

function renderInfo(){		
	// Render Dimensions
	var dimensions = getWidth() + ' <span>x</span> ' + getHeight() + '';
	$('#dimensions').html( dimensions );	

	// Render All Other Info	
	var info = '<em>Orientation:</em> ' + getOrientation() + '<br>';
	info += '';
	$('#info').html( info );
}

function getOrientation(){
	if ( getWidth() >= getHeight() ) return 'Landscape'
	else return 'Portrait';
}

function getWidth(){
	return $(window).width();
}

function getHeight(){
	return $(window).height();
}
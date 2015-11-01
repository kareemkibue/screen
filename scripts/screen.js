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
	var info = 'Orientation: <strong>' + getOrientation() + '</strong><br>';
	// info += 'Device Category: <strong>Desktop</strong>' + '<br>';
	// info += 'Operating System: <strong>Android</strong>' + '<br>';
	// info += 'Browser: <strong>Firefox v42.0.5</strong>' + '<br>';
	// info += 'This is <strong>NOT</strong> a touch device';
	// info += 'This is resolution mimics the a QHD Screen, Samsung Galaxy Tab and the iPad 3';	
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
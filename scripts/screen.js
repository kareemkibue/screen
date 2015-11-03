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

$(window).load(function(){
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-34860119-5', 'auto');
  ga('send', 'pageview');

});


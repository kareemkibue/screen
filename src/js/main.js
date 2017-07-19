var setWidth = 0,
    setHeight = 0;

$( document ).ready( function() {
    renderInfo();
    renderDimensions();
} );

$( window ).resize( function() {
    renderInfo();
    renderDimensions();
} );

function renderInfo() {
    $( '.page-wrapper' ).addClass( 'show' );

    // Render All Other Info	
    var info = '<span>Orientation:</span>&nbsp;<strong>' + getOrientation() + '</strong><br>';
    /* info += 'Device Category: <strong>Desktop</strong>' + '<br>';
    info += 'Operating System: <strong>Android</strong>' + '<br>';
    info += 'Browser: <strong>Firefox v42.0.5</strong>' + '<br>';
    info += 'This is <strong>NOT</strong> a touch device';
    info += 'This is resolution mimics the a QHD Screen, Samsung Galaxy Tab and the iPad 3'; */
    $( '#deviceInfo' ).html( info );
}

function renderDimensions() {
    var
        targetWidth = getWidth(),
        width = setWidth,
        targetHeight = getHeight(),
        height = setHeight;

    var runWidthValues = setInterval( runTimer, .00000001 );

    function runTimer() {
        if ( width < targetWidth )
            width += 13;
        else if ( width > targetWidth )
            width -= 13;

        if ( height < targetHeight )
            height += 7;
        else if ( height > targetHeight )
            height -= 7;

        if ( width >= targetWidth /* && height >= targetHeight  */ ) {
            width = setWidth = targetWidth;
            height = setHeight = targetHeight;

            clearInterval( runWidthValues );
        }

        var dimensions = width + ' <span>x</span> ' + height + '';
        $( '#dimensions' ).html( dimensions );
    }

}

function getOrientation() {
    if ( getWidth() >= getHeight() ) return 'Landscape'
    else return 'Portrait';
}

function getWidth() {
    return $( window ).width();
}

function getHeight() {
    return $( window ).height();
}

/* function animateValues() {

    var currentWidth = 0;
    var targetWidth = 100;
    runValues();

    function runValues() {
        console.log( currentWidth );

        currentWidth++;
        if ( currentWidth < targetWidth )
            setTimeout( runValues, 10 );
    }

} */

$( window ).load( function() {
    ( function( i, s, o, g, r, a, m ) {
        i[ 'GoogleAnalyticsObject' ] = r;
        i[ r ] = i[ r ] || function() {
            ( i[ r ].q = i[ r ].q || [] ).push( arguments )
        }, i[ r ].l = 1 * new Date();
        a = s.createElement( o ),
            m = s.getElementsByTagName( o )[ 0 ];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore( a, m )
    } )( window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga' );

    ga( 'create', 'UA-34860119-5', 'auto' );
    ga( 'send', 'pageview' );

} );
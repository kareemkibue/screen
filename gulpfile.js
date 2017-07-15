/*Gulp*/
let gulp = require( 'gulp' );
let webserver = require( 'gulp-webserver' );
let concat = require( "gulp-concat" );
let ftp = require( 'vinyl-ftp' );
let debug = require( 'gulp-debug' );
let fs = require( 'fs' );
/*SASS/CSS*/
let stylus = require( 'gulp-stylus' );
/*JS*/
let babel = require( "gulp-babel" );

gulp.task( 'serve', function() {
    gulp.src( './' )
        .pipe( webserver( {
            fallback: 'index.html',
            host: 'localhost',
            livereload: true,
            open: true,
            port: 1010
        } ) );
} );

gulp.task( 'watch', function() {
    gulp.watch( './src/sass/main.styl', [ 'css' ] );
    gulp.watch( './src/js/**/*.js', [ 'js' ] );
} );

gulp.task( 'css', function() {
    return gulp.src( './src/sass/main.styl' )
        .pipe( stylus() )
        .pipe( gulp.dest( './stylesheets' ) );
} );

gulp.task( 'js', function() {
    return gulp.src( './src/**/*.js' )
        .pipe( babel() )
        .pipe( concat( "main.js" ) )
        .pipe( gulp.dest( './scripts' ) );
} );

gulp.task( 'ftp', function() {
    var ftpConfig = JSON.parse( fs.readFileSync( './ftp.json' ) );
    var conn = ftp.create( ftpConfig );

    var globs = [
        'index.html',
        'scripts/**',
        'stylesheets/**',
    ];

    return gulp.src( globs, {
            base: '.',
            buffer: false
        } )
        .pipe( debug() )
        .pipe( conn.newer( '/screen/' ) )
        .pipe( conn.dest( '/screen/' ) );

} );

gulp.task( 'build', [ 'js', 'css' ] );
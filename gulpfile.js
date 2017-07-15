/*Gulp*/
var gulp = require( 'gulp' );
var webserver = require( 'gulp-webserver' );
var concat = require( "gulp-concat" );
/*SASS/CSS*/
var stylus = require( 'gulp-stylus' );
/*JS*/
var babel = require( "gulp-babel" );

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
    gulp.watch( '/src/sass/*.styl', [ 'css' ] );
    gulp.watch( '/src/js/**/*.js', [ 'js' ] );
} );

gulp.task( 'css', function() {
    return gulp.src( '/src/sass/main.styl' )
        .pipe( stylus() )
        .pipe( gulp.dest( './stylesheets' ) );
} );

gulp.task( 'js', function() {
    return gulp.src( '/src/**/*.js' )
        .pipe( babel() )
        .pipe( concat( "main.js" ) )
        .pipe( gulp.dest( './scripts' ) );
} );

gulp.task( 'build', [ 'js', 'css' ] );
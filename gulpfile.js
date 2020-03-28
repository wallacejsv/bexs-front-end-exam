var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

sass.compiler = require( 'node-sass' );

gulp.task(
    'sass',
    function () {
        return gulp.src( './css/*.scss' )
            .pipe( sass.sync( {outputStyle: 'compressed'} ).on( 'error', sass.logError ) )
            .pipe( gulp.dest( './css/min/' ) );
    }
);

gulp.task(
    'sass:watch',
    function () {
        gulp.watch( './css/**/*.scss',  gulp.series('sass') );
    }
);
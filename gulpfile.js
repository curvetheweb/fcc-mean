var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var ignore = require('gulp-ignore');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var babel = require('gulp-babel');

gulp.task('sass', function () {
  return gulp.src(['./app_server/scss/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'));
});
 
// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./node_modules/jquery/dist/jquery.min.js',
						'./node_modules/what-input/what-input.js',
						'./node_modules/foundation-sites/js/foundation.core.js', 
						'./node_modules/foundation-sites/js/*.js',
						'./app_server/js/*.js'])
		.pipe(babel())
    .pipe(concat('script.js'))
    .pipe(stripDebug())
		.pipe(ignore.exclude([ "**/*.map" ]))
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('sass:watch', function () {
  gulp.watch('app_server/scss/*.scss', ['sass']);
});

gulp.task('watch', function () {
	gulp.watch('./app_server/scss/*.scss', ['sass']);
	gulp.watch('./app_server/js/*.js', ['scripts']);
});
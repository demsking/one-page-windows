// Base Gulp File
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// Task to Minify JS
gulp.task('default', function() {
    return gulp.src('./src/**/*.js')
        .pipe(uglify())
        .pipe(rename('windows.min.js'))
        .pipe(gulp.dest('./dist'));
});
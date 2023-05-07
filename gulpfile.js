'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

let scss = () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      style: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

let sasswatch = () => {
  gulp.watch('./sass/**/*.scss', scss());
}

exports.default = sasswatch()
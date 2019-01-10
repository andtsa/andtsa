'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
sass.compiler = require('node-sass');
let webserver = require('gulp-webserver');



let serve = () => {
  gulp.src('./public/')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
}

let minifycss = () => {
  return gulp.src('./public/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8', format:{breakWith:''} }))
    .pipe(gulp.dest('./public/css'));
}

let scss = () => {
  return gulp.src('./public/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
}

let watch = () => {
  gulp.watch(['./public/sass/*.scss'], scss());
  gulp.watch(['./public/css/*.css'], minifycss());
}


exports.default = gulp.parallel(watch, serve)
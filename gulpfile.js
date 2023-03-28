"use strict";

// Load plugins
const { src, dest }     = require('gulp');
const sourcemaps        = require('gulp-sourcemaps');
const concat            = require('gulp-concat');
const sass              = require('gulp-sass')(require('sass'));
const postcss           = require('gulp-postcss');
const cssnano           = require('gulp-cssnano');

// const autoprefixer      = require('gulp-autoprefixer');
// const imagemin          = require('gulp-imagemin');
// const plumber           = require('gulp-plumber');
// const browserSync       = require('browser-sync').create();
// var reload              = browserSync.reload;
// const watch             = require('gulp-watch');
// const rename            = require ('gulp-rename');
// const uglify            = require('gulp-uglify');

// Sass task
function sassTask() {
  return src('./source/sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(cssnano()))
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('./build/css/'));
}

// JS task

// Images task

// Browser task

// Default Gulp task
exports.default = sassTask




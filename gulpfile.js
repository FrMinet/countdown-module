// Load plugins
const { src, dest, watch, series }     = require('gulp');
const sourcemaps        = require('gulp-sourcemaps');
const concat            = require('gulp-concat');
const sass              = require('gulp-sass')(require('sass'));
const cssnano           = require('gulp-cssnano');
const autoprefixer      = require('gulp-autoprefixer');
// const imagemin          = require('gulp-imagemin');
// const plumber           = require('gulp-plumber');
const sync       = require('browser-sync').create();
// var reload              = browserSync.reload;
// const watch             = require('gulp-watch');
// const rename            = require ('gulp-rename');
// const uglify            = require('gulp-uglify');

// Sass task
function sassTask(cb) {
  src('./source/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(concat('main.min.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('build/css/'))
    .pipe(sync.stream());
  cb();
}

// JS task

// Images task

// Watch Task
function watchTask(cb) {
  
}

// BrowserSync task
function browserSyncTask(cb) {
  sync.init({
    server: {
      baseDir: "./build"
    }
  });

  watch('./source/sass/**/**.scss', sassTask);
  watch("./build/**.html").on('change', sync.reload)

}

// Exports tasks
exports.css = sassTask;
exports.sync = browserSyncTask;


// Default Gulp task
exports.default = series(sassTask,browserSyncTask);



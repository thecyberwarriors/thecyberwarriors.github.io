var gulp = require('gulp'),
    minifyHtml = require('gulp-minify-html'),
    sourcemaps = require('gulp-sourcemaps'),
    uglifycss = require('gulp-uglifycss'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del');
 
var paths = {
  scripts: ['development/js/*.js'],
  images: 'development/img/**/*',
  landing_style: 'development/css/styles.css',
  landing: 'development/index.html',
  resources: 'development/resources/field-manual.html',
  resources_style: 'development/resources/css/field-manual.css'
};
 
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['js']);
});
 
gulp.task('landing', ['clean'], function() {
  // Minify html 
  return gulp.src(paths.landing)
      .pipe(minifyHtml())
      .pipe(concat('index.html'))
    .pipe(gulp.dest('./'));
});

gulp.task('resources', ['clean'], function() {
  // Minify html 
  return gulp.src(paths.resources)
      .pipe(minifyHtml())
      .pipe(concat('field-manual.html'))
    .pipe(gulp.dest('./resources/'));
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('script.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js'));
});

gulp.task('landing_style', ['clean'], function() {
  // Minify and copy all css (except vendor scripts)
  return gulp.src(paths.landing_style)
      .pipe(uglifycss({"uglyComments":true}))
      .pipe(concat('styles.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('resources_style', ['clean'], function() {
  // Minify and copy all css (except vendor scripts)
  return gulp.src(paths.resources_style)
      .pipe(uglifycss({"uglyComments":true}))
      .pipe(concat('field-manual.css'))
    .pipe(gulp.dest('./resources/css'));
});

// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('img'));
});
 
// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.landing_style, ['landing_style']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.landing, ['landing']);
});
 
// The default task (called when you run `gulp` from cli)
gulp.task('default', ['landing', 'landing_style', 'resources', 'resources_style', 'scripts', 'images']);

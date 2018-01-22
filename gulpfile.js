
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'app/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
})

gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("app/js"))
        .pipe(browserSync.stream());
});
gulp.task('serve',['sass'], function () {
    browserSync.init({
        server:
            {
                baseDir: './'
            }
    });
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'app/scss/*.scss'], ['sass']);
    gulp.watch("*.html").on("change", reload);

})

gulp.task('watch', function () {
    var server = livereload();
    gulp.watch(['*.js,*.html'], function () {
        server.changed();
    });
});

gulp.task('default', ['watch','js, serve']);

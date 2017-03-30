var gulp = require('gulp');
var less = require('gulp-less');
var typescript = require('gulp-typescript');

gulp.task('typescript', function() {

    gulp.src(['ts/venom.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('ts/'))
})

gulp.task('styles', function() {

    gulp.src(['less/style.less'])
        .pipe(less())
        // .pipe(minifyCSS())
        .pipe(gulp.dest('less/'))
        // .pipe(refresh(server))
})

gulp.task('default', function() {
    gulp.run('styles', 'typescript');

    // gulp.watch('app/src/**', function(event) {
    //     gulp.run('scripts');
    // })

    // gulp.watch('app/css/**', function(event) {
    //     gulp.run('styles');
    // })
})
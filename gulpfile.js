var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-clean-css'),
    tscConfig = require('./tsconfig.json'),
    sourcemaps = require('gulp-sourcemaps');

//gulp.task('default', function (){
 //   return gulp.src(['app/**/*.{js,css}', './*.css'])//avoid spaces between multiple files extension, paths etc ('js,css' is ok, 'js, css' is wrong)
//                .on("data", function(file){
//                	 console.log(file); 
//                })
//               .pipe(gulp.dest(function(file){
 //                   return file.extname == '.js' ? 'dest/js' :
 //                          file.extname == '.css' ? 'dest/css' : 'dest'
 //              }))
//});

gulp.task('styles', function(){
	return gulp.src(['app/**/*.css', './*.css'])
	    .pipe(concatCss('bundle.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
	    .pipe(gulp.dest('dest'))
})

gulp.task('default', function(){
	return gulp.src(['app/**/*.{js,css}', './*.{css,html}'])
	   .pipe(gulp.dest('public'))
})

gulp.task('compile', function(){
	return gulp
	   .src('app/**/*.ts')
	   .pipe(typescript(tscConfig.compilerOptions))
	   .pipe(sourcemaps.write('.'))
	   .pipe(gulp.dest('dist/app'))
})


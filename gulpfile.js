var gulp = require('gulp')
	// ejs = require('gulp-ejs'),
	stylus = require('gulp-stylus'),
	connect = require('gulp-connect');

// gulp.task('ejs', function() {
// 	gulp.src(['./src/templates/views/**/*.ejs', './src/templates/*.ejs'])
// 		.pipe(ejs({
// 				msg: 'Hello Gulp 2!'
// 			},
// 			{
// 				ext: '.html'
// 			})
// 		)
// 		.pipe(gulp.dest('./public'));
// });

gulp.task('css', function () {
	return gulp.src('./src/css/main.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
	gulp.watch(['./src/css/**/*'], ['process']);
});
 
gulp.task('webserver', function () {
	connect.server({
		name: 'app',
		root: ['./'],
		port: 8000,
		livereload: true
	});
});

gulp.task('process', ['css']);
gulp.task('default', ['process', 'watch', 'webserver']);
// gulp.task('default', ['webserver']);

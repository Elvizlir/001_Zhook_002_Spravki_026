module.exports = function (){
	$.gulp.task('sass', function() {
	return $.gulp.src('sourse/pug/blocks/top-nav/_top-nav.scss')
	.pipe($.sassGlob())
	.pipe($.gp.sass().on("error", $.gp.notify.onError()))
	
	//.pipe(gulpif(envDev, sourcemaps.write({includeContent: false, sourceRoot: '/public'})))
	.pipe($.gulpif(!$.envDev, $.gp.combineMq()))
	.pipe($.gp.autoprefixer(['last 5 versions']))
	.pipe($.gulp.dest('public/'))
	//.on('end', browserSync.stream());
	.pipe($.browserSync.stream());
}); 
  
}
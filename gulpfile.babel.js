const gulp = require('gulp');
const plugin = require('gulp-load-plugins')();

gulp.task('build', () =>
	gulp.src('src/main.js')
		.pipe(plugin.babel({ presets: ['react', 'es2015'] }))
		.pipe(plugin.browserify({ insertGlobals: false }))
		.pipe(plugin.uglify())
		.pipe(gulp.dest('public'))
);
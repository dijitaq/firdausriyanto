'use strict'

const { src, dest, watch } = require('gulp');

const sass = require('gulp-sass');

function compileSass(done) {
	src('scss/app.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('../assets/css'));

	done();
}

function watchSass() {
   watch('scss/app.scss', compileSass);
}

exports.watchSass = watchSass
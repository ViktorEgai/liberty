const plugins = [
	'node_modules/@fancyapps/ui/dist/fancybox/fancybox.umd.js',
	'node_modules/swiper/swiper-bundle.min.js',
	// 'node_modules/gsap/dist/gsap.min.js',
	// 'node_modules/gsap/dist/ScrollTrigger.min.js',
	'node_modules/aos/dist/aos.js',
	'node_modules/inputmask/dist/inputmask.min.js',
	'node_modules/intl-tel-input/build/js/intlTelInput.min.js',
];
const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const chalk = require('chalk');

module.exports = function libs_js(done) {
	if (plugins.length > 0)
		return src(plugins)
			.pipe(map.init())
			.pipe(uglify())
			.pipe(concat('libs.min.js'))
			.pipe(map.write('../sourcemaps'))
			.pipe(dest('build/js/'))
			.pipe(dest('theme/js/'))
	else {
		return done(console.log(chalk.redBright('No added JS plugins')));
	}
}
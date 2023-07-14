const gulp = require('gulp');

const revReplace = require("gulp-rev-replace");

module.exports = function rev_replace() {
	var manifest = gulp.src("build/rev-manifest.json");

  return gulp.src("dev/*.html")
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('build'));

}
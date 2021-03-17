// watchen, compileren, syncen
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-dart-sass'); // dit is voor wanneer gulp-sass niet werkt, anders vul je hier gulp-sass in
//const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const browsersync = require("browser-sync").create();

function scss() {
  return src("src/scss/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest("dist/css", { sourcemaps: "." }));
}

function sync(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function syncReload(cb) {
  browsersync.reload();
  cb();
}

function watcher() {
  watch("*.html", syncReload);
  watch(["src/scss/**/*.scss"], series(scss, syncReload));
}

exports.default = series(scss, sync, watcher);

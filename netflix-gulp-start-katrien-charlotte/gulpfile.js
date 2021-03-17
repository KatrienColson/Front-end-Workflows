const {src, series, dest, watch} = require('gulp');
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const browsersync = require("browser-sync").create();
const autoprefixer = require('autoprefixer');
const imagemin=require('gulp-imagemin');
const rename = require('gulp-rename');
const htmlmin = require('htmlmin');




function compile() {
  return src("src/scss/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename('main.min.css'))
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

function html() {
	return src('*.html')
    .pipe(htmlmin({collaps, Whitespace: true}))
    .pipe(dest('dist'));
}

function images(){
    return src('src/img/*').pipe(imagemin()).pipe(dest('dist/img'));
}

// gulp.task('default', function() {
//     return gulp.watch('../**/**.js', function(obj) {
//       gulp.src(obj.path)
//         .pipe(rename('newFileName.js'))
//         .pipe(gulp.dest('.'));
//     });
// });

function watcher() {
watch(["*.html"], series(html, syncReload));
watch(["src/scss/**/*.scss"], series(compile, syncReload));
watch(["src/img/*"], series(images, syncReload));
}


exports.default = series(compile, html, images, sync, watcher);
const {src, series, dest, watch} = require('gulp');
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const browsersync = require("browser-sync").create();
const autoprefixer = require('autoprefixer');
const imagemin=require('gulp-imagemin');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const uglify= require('gulp-uglify');

function compile() {
    return src("src/scss/main.scss", { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename('main.min.css'))
        .pipe(dest("dist/css", { sourcemaps: "." }));//deze staat het beste onder aan deze lijst
    }

    function uglifying (){
        return src('src/js/*.js').pipe(uglify()).pipe(dest('dist/js'));
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
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(dest('dist'));
    }

    function images(){
        return src('src/img/*').pipe(imagemin()).pipe(dest('dist/img'));
    }

    function watcher() {
    watch(["*.html"], series(html, syncReload));
    watch(["src/scss/**/*.scss"], series(compile, syncReload));
    watch(["src/img/*"], series(images, syncReload));
    watch(['src/js/**/*.js'], series (uglify, syncReload));
    }


exports.default = series(compile, html, images, sync, watcher);// zorg ervoor dat je eindigd met sync en watcher. //terminal:gulp
exports.html = html;//gulp html
exports.uglifying=uglifying;
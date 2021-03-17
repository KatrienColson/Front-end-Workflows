
const { src, series, parallel, dest, watch } = require("gulp");

const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');

const imagemin = require('gulp-imagemin');

const sass = require('gulp-dart-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

const browsersync = require('browser-sync').create();

function html() {
    return src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

function scripts() {
    return src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/js'));
}

function images() {
    return src('src/img/*')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}

function compile() {
    return src('src/scss/main.scss')
        .pipe(rename('main.min.css'))
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'));
}

function sync(cb) {
    browsersync.init({
        server: {
            baseDir: './dist'
        }
    });
    cb();
}

function syncReload(cb) {
    browsersync.reload();
    cb();
}

function watcher() {
    watch('*.html', series(html,syncReload));
    watch('src/js/*', series(scripts, syncReload));
    watch('src/img/*', series(images,syncReload));
    watch(['src/scss/**/*.scss'], series(compile, syncReload));
}

exports.html = html;
exports.scripts = scripts;
exports.images = images;
exports.compile = compile;
exports.default = series(html, scripts, images, compile, sync, watcher);

// npm install gulp autoprefixer gulp-rename gulp-htmlmin gulp-concat gulp-terser gulp-sourcemaps gulp-imagemin gulp-dart-sass gulp-postcss cssnano browser-sync -D
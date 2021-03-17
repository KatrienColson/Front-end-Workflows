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
const plumber = require('gulp-plumber')
const browsersync = require('browser-sync');

function compile() {
    return src('src/scss/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'));
}

function html() {
    return src('*.html')
        .pipe(plumber())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
}

function scripts() {
    return src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js', {newLine: '\r\n'}))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/js'));
}

function images() {
    return src('src/img/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}

plumbed = () => src(...args).pipe(plumber());

function sync(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
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
    watch(['src/js/*'], series(scripts, syncReload));
    watch(['src/img/*'], series(images,syncReload));
    watch(['src/scss/**/*.scss'], series(compile, syncReload));
}

exports.compile = compile;
exports.html = html;
exports.scripts = scripts;
exports.images = images;
exports.default = series(compile, html, scripts, images, sync, watcher);
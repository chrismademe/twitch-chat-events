const gulp = require("gulp");
const postcss = require("gulp-postcss");
const postcssPlugins = [require("tailwindcss"), require("autoprefixer")];

const _ = {
    src: `./src`,
    dest: `./assets`
};

const compileCSS = function() {
    return gulp
        .src(`${_.src}/css/style.css`)
        .pipe(postcss(postcssPlugins))
        .pipe(gulp.dest(`${_.dest}/css`));
};

const watch = function(done) {
    gulp.watch(`${_.src}/css`, compileCSS);
    gulp.watch(`./tailwind.config.js`, compileCSS);

    done();
};

exports.default = compileCSS;
exports.compileCSS = compileCSS;
exports.watch = gulp.parallel(watch);

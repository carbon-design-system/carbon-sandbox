const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");

const reload = browserSync.reload;

const src = {
  scss: "client/src/styles/**.scss",
  css: "public/css",
  html: "public/index.html"
};

gulp.task("serve", ["sass"], () => {
  browserSync.init({
    proxy: "localhost:8080",
    notify: false
  });

  gulp.watch(src.scss, ["sass"]);
});

gulp.task("sass", () =>
  gulp
    .src(src.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest(src.css))
    .pipe(browserSync.stream())
);

gulp.task("default", ["serve"]);

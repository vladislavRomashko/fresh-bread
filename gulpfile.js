'use strict';

const {src, watch, series, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

exports.sass = function () {
    return src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
};

exports.sassWatch = function () {
    watch('./src/styles/*.scss', series('sass'));
};
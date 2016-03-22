var gulp = require('gulp');
 
var ts = require('gulp-typescript');
var tsConfig = require('./src/tsconfig.json');
 
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
 
// TypeScriptのコンパイルとwebpackの実行
gulp.task('ts', function () {
    // TypeScriptのコンパイル
    var tsResult = gulp.src(['./src/**/*.ts', '!./src/typings'])
        // tscpnfig.jsonに書いたコンパイルオプションの取得
        .pipe(ts(tsConfig.compilerOptions))
        // webpack.config.jsに書いたwebpackの設定取得
        .pipe(webpack(webpackConfig));
     
    // JSファイルをdistに移動
    return tsResult.pipe(gulp.dest('./dist'));
});
 
// 自動コンパイル
gulp.task('watch', function () {
    // src配下のTSが変更されたら、'ts'タスク（TypeScriptのコンパイル）を実行
    gulp.watch('./src/**/*.ts', ['ts']);
});
 
// コマンドで「> gulp」と入力するだけでtsタスクとwatchタスクをする
gulp.task('default', ['ts', 'watch']);
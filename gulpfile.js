var gulp = require('gulp');
var autoprefiexer = require('gulp-autoprefixer');//自动浏览器前缀
var sass = require('gulp-sass');//sass编译
var minify = require('gulp-minify-css');//css压缩
var jshint = require('gulp-jshint');//js代码检查
var concat = require('gulp-concat');//js合并
var uglify = require('gulp-uglify');//文件压缩
var imagemin = require('gulp-imagemin');//图片压缩
var browser = require('browser-sync').create();//自动刷新不需要浏览器插件
var rename = require('gulp-rename');//重命名
var cache = require('gulp-cache');
var notify = require('gulp-notify');//更改提醒
var plumber = require('gulp-plumber');//防止错误挂断gulp




gulp.task('styles',function(){
	gulp.src('dist/css/**/*.scss')
		.pipe(plumber({errorHandler : notify.onError('Error: <%= error.message%>')}))
		.pipe(sass())
		.pipe(autoprefiexer({
			browsers : ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade :  false
		}))
		.pipe(gulp.dest('app/manage/css'))
		.pipe(rename({suffix:'.min'}))
		.pipe(minify())
		.pipe(gulp.dest('app/manage/css'))
		
});

gulp.task('scripts',function(){
	gulp.src('dist/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('app/manage/js'))
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('app/manage/js'))
		.pipe(notify({message:'scripts task'}));
});

gulp.task('images',function(){
	gulp.src('app/manage/images/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
	    .pipe(gulp.dest('dist/images/**/*'))
	    .pipe(notify({ message: 'Images task complete' }));
});

//监听文件变更
gulp.task('watch',function(){
	gulp.watch('dist/css/**/*.scss',['styles']);
	gulp.watch('dist/js/**/*.js',['scripts']);
	gulp.watch('app/manage/images/**/*',['images']);
});

gulp.task('browser-sync',function(){
	var files = ['app/manage/css/*.css','app/manage/js/*.js','app/manage/images/**/*','app/manage/**/*.html'];
	browser.init(files,{
		server : {
			baseDir : 'app/'
		}
	})
});

gulp.task('default', ['styles','scripts', 'images','watch','browser-sync']);


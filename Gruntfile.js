/**
 * Created by doyen on 2015/9/6.
 */
module.exports = function (grunt) {
	// 项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		handlebars: {
			compile: {
				options: {
					namespace: 'JST',
					amd: true
				},
				files: {
					'scripts/header/templates/main.js' : [ 'scripts/header/templates/*.hbs'],
					'scripts/account/templates/main.js' : [ 'scripts/account/templates/*.hbs'],
					'scripts/calculate/templates/main.js' : [ 'scripts/calculate/templates/*.hbs'],
					'scripts/contact/templates/main.js' : [ 'scripts/contact/templates/*.hbs'],
					'scripts/memo/templates/main.js' : [ 'scripts/memo/templates/*.hbs']
				}
			}
		}
	});

	// 加载提供"uglify"任务的插件
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	// 默认任务
	grunt.registerTask('default', ['handlebars']);
}
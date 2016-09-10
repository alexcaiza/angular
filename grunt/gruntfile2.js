module.exports = function (grunt) {
	grunt.initConfig(
	{
		jshint: {
			all:['scripts.js']
		}
	}
	);
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.registerTask('default', ['jshint']);
};

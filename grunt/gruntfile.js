module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['scripts.js'],
	  options: {
        reporterOutput: "",
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['scripts.js'],
	  options: {
        reporterOutput: "",
      }
    },
	concat: {
		dist: {
			src: ['scripts.js','scripts1.js','scripts2.js'],
			dest: 'unidos.js'
		}
	},
	uglify: {
		dist: {
			src: 'unidos.js',
			dest: 'build/unidos.min.js'
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint','concat','uglify']);

};

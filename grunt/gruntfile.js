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
	},
	shell: {
		multiple: {
			command: [
				'del unidos.js',
				'mkdir deploy',
				'move build\\unidos.min.js deploy\\unidos.min.js'
			].join('&&')
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jshint','concat','uglify','shell']);

};

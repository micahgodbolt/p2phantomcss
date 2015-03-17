module.exports = function(grunt) {

  grunt.initConfig({
    phantomcss: {
            options: {
              mismatchTolerance: 0.05,
              screenshots: 'baselines',
              results: 'results',
              viewportSize: [1280, 800],
              },
              src: [
                 'phantomcss.js'
              ]
          },
  });

  grunt.loadNpmTasks('grunt-phantomcss');

  grunt.registerTask('default', ['phantomcss']);

};

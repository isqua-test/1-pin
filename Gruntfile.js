module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    },

    copy: {
       main: {
        files: [
          {
            expand: true,
            src: ['*.html'],
            dest: 'gosha/',
          }
         ]
       }
    },

    'gh-pages': {
      options: {
        base: 'gosha',
        repo: 'git@github.com:whitebalance/1-pin.git',
        add: true
      },
      src: '**/*'
    }
  });

  grunt.loadNpmTasks('grunt-lintspaces');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('lint', ['lintspaces']);
  grunt.registerTask('gosha', ['copy']);
};

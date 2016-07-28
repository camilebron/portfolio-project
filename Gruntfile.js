module.exports = function(grunt){

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    build: {
      src: 'src/js/*.js',
      dest:'js/script.min.js'
    },
    dev:{
      options:{
        beautify: true,
        mangle: false,
        compress: false,
        preserveComments: 'all'
      },
      src: 'src/js/*.js',
      dest:'js/script.min.js'
    }
  },
  sass:{
    dev:{
      options:{
        outputStyle: 'expanded'
      },
      files: {
        'css/styles.css':'src/scss/application.scss'
      }
    },
    build:{
      options:{
        outputStyle: 'compressed'
      },
      files: {
        'css/styles.css':'src/scss/application.scss'
      }
    }
  },
  watch:{
    js:{
      files: ['src/js/*.js'],
      tasks: ['uglify:dev']
    },
    css:{
      files:['src/scss/**/*/.scss'],
      tasks:['sass.dev']
    }
  },
  responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1000,
            name: 'large',
            quality:40
          },{
            name: "medium",
            width: 700,
            quality:40
          },{
            name: "small",
            width: 375,
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['images/*'],
          dest: 'images_src/'
        }]
      }
    },
});
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-responsive-images');


grunt.registerTask('default', [
  'uglify:dev',
  'sass:dev',
  'responsive_images'
]);
grunt.registerTask('build', [
  'uglify:build',
  'sass:build'
]);


};

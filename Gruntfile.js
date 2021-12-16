module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        files: {
          "css/style.css": "sass/style.scss",
        },
      },
    },
    watch: {
      css: {
        files: "sass/*.scss",
        tasks: ["sass"],
        options: {
          livereload: true,
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["sass"]);
};

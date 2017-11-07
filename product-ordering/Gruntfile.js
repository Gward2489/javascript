module.exports = function foo(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: ["**/scripts/*.js", "!node_modules/**/*.js"],
                tasks: ["eslint", "browserify"],
                options: {
                    spawn: false,
                },
            },
        },
        browserify: {
            dist: {
                files: {
                    "build/bundle.js": ["scripts/main.js"],
                    
                },
            },
        },
        eslint: {
            all: ["**/*.js", "!node_modules/**/*.js", "!build/**"]
        }
    })

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("grunt-browserify")
    grunt.loadNpmTasks("grunt-eslint")

    // Default task(s).
    grunt.registerTask("default", ["watch", "browserify", "eslint"])
}
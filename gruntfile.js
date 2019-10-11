var grunt = require('grunt');

grunt.initConfig({
    buildcontrol: { app: {
        options: {
            dir: 'src',
            branch: 'gh-pages',
            commit: true,
            push: true,
            force: true,
            message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%',
            remote: 'git@github.com:plegner/legner.com.git'
        }
    }}
});

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.registerTask('deploy', ['buildcontrol']);
module.exports = grunt;

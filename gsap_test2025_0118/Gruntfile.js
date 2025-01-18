module.exports = function (grunt) {
	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({
		dir: {
			html: 'html',
			src: '<%= dir.html %>/_src',
			dist: '<%= dir.html %>/dist',
			src_sass: '<%= dir.src %>/sass',
			src_js: '<%= dir.src %>/js',
			src_ts: '<%= dir.src %>/ts',
			dist_css: '<%= dir.dist %>/css',
			dist_js: '<%= dir.dist %>/js',
			dist_ts: '<%= dir.dist %>/js',
			tmpl_base: 'tmpl_base'
		},
		compass: {
			dist: {
				options: {
					force: true,
					relativeAssets: true,
					noLineComments: true,
					sourcemap: true,
					assetCacheBuster:false,
					outputStyle: 'expanded',
					sassDir: '<%= dir.src_sass %>',
					cssDir: '<%= dir.dist_css %>',
					imagesDir: '<%= dir.dist %>/images',
					javascriptsDir: '<%= dir.dist_js %>',
					fontsDir: '<%= dir.dist %>/fonts'
				}
			}
		},
		autoprefixer: {
			dist:{
				options: {
					map: true,
					browsers: ['last 2 version', 'ie 11', 'android 4.4'] // -> ブラウザの対応バージョンをオプションで決定できます。
				},
				src: '<%= dir.dist_css %>/*.css'
			}
		},
		typescript: {
			base: {
				src: ['<%= dir.src_ts %>/**/*.ts'],
				desc: '<%= dir.dist_js %>',
				options: {
					sourceMap: true,
					declaration: true
				}
			}
		},
		wr2conv: {
			options: {
				checkResource: 'tmpl_base/report.txt'
			},
			dist:{
				files: {
					'<%= dir.tmpl_base %>/css/': ['<%= dir.dist_css %>/**/*.css'],
					'<%= dir.tmpl_base %>/js/': ['<%= dir.dist_js %>/**/*.js'],
					'<%= dir.tmpl_base %>/': ['<%= dir.html %>/**/*.html']
				}
			},
			report:{
				options: {
					dry: true
				},
				files: {
					'<%= dir.tmpl_base %>/css/': ['<%= dir.dist_css %>/**/*.css'],
					'<%= dir.tmpl_base %>/js/': ['<%= dir.dist_js %>/**/*.js'],
					'<%= dir.tmpl_base %>/': ['<%= dir.html %>/**/*.html']
				}
			}
		},
		clean:{
			cache: '.sass-cache',
			tmpl: '<%= dir.tmpl_base %>',
			map: ['<%= dir.dist_js %>/*.map','<%= dir.dist_css %>/*.map']
		},
		watch: {
			configFiles: {
				files: ['Gruntfile.js'],
				options: {
					reload: true
				}
			},
			css: {
				files: ['<%= dir.src_sass %>/**/*.scss'],
				tasks: ['compass', 'autoprefixer'],
				options: {
					livereload: true
				}
			},
			scripts: {
				files: '<%= dir.dist_js %>/**/*.js',
				options: {
					livereload: true
				}
			},
			typescripts: {
				files: ['<%= typescript.base.src %>'],
				tasks: ["newer:typescript"],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['<%= dir.dist %>/**/*.html'],
				options: {
					livereload: true
				}
			}
		},
		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				// change this to '0.0.0.0' to access the server from outside
				hostname: '*'
			},
			livereload: {
				options: {
					open: true,
					base: [
						'<%= dir.dist %>'
					]
				}
			}
		},
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>'
			},
			files: [
				'<%= dir.dist %>/**/*.html',
				'<%= dir.dist_js %>/*.js',
				'<%= dir.dist_css %>/*.css',
				'<%= dir.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
			]
		}
	});

	var taskName;
	for(taskName in pkg.devDependencies) {
		if(taskName.substring(0, 6) == 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}

	// Default task.
	grunt.registerTask('default', ['clean', 'compass', 'autoprefixer', 'typescript']);
	grunt.registerTask('server', ['compass', 'autoprefixer', 'connect:livereload', 'watch']);
	grunt.registerTask('wr2', ['clean', 'wr2conv:dist']);
	grunt.registerTask('dist', ['clean', 'compass', 'autoprefixer', 'typescript', 'clean']);
};

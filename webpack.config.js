var webpack = require("webpack");
var debug = process.env.NODE_ENV !== "production";
var nodeExternals = require('webpack-node-externals');

module.exports = [/*
    {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,
    entry: './server/index.js',
    output: {
        path: __dirname + '/server',
        filename: 'server.bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }]
    },
    target: 'node',
    externals: [nodeExternals()],
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccuranceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
	],
	watch: true
},*/
    {
		context: __dirname,
		devtool: debug ? "inline-sourcemap" : null,
        entry: './public/app/app.jsx',
        output: {
			path: __dirname + "/public/app/",
			filename: "bundle.js"
        },
        module: {
            loaders: [{
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }]
        },
		plugins: debug ? [] : [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccuranceOrderPlugin(),
			new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
		],
		watch: true
    }
];

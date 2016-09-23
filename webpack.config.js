var path = require('path');

module.exports = {
	entry: './src/wrapper.js',
    output: {
        //Export itself to all the things (UMD).
        libraryTarget: "umd",
        //Name of the global var: "wxTiles"
        library: "wxTiles",
		path: "./out/dist",
		filename: "wxTiles.js"
    },
	resolve: {
		root: [
			path.resolve('./src')
		]
	},
	node: {
		fs: 'empty'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
				}
			}
		]
	}
};
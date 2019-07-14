const path = require('path');
const DIST_DIR = path.join(__dirname, 'client/dist');
const SRC_DIR = path.join(__dirname, 'client/src');

module.exports = {
	mode: 'production',
	entry: 	`${SRC_DIR}/index.jsx`,
	output: {
		path: DIST_DIR,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react'
					]
				}
			}
		]
	},
	devServer: {
		contentBase: DIST_DIR,
		compress: true,
		port: 9000
	}
};
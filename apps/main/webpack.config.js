const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'none',
	target: 'electron-main',
	entry: './main.js',
	node: {
		__dirname: false
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: 'assets', to: 'assets' },
				{ from: '../dist', to: '' },
			],
		}),
	]
};

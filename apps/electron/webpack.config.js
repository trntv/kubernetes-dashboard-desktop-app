const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'none',
    target: 'electron-main',
    entry: './src/main.js',
    node: {
        __dirname: false
    },
    output: {
        path: path.join(__dirname, "./../../dist")
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './src/assets', to: 'assets' },
            ],
        }),
    ]
};

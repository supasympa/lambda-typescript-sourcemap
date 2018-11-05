const path = require('path');
// const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

// const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: './handler.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        library: "index",
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    target: 'node',
    // externals: [ nodeExternals() ],
    devtool: "source-map",
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: !debug,
        //     sourcemap: true
        // }),
    ],
};

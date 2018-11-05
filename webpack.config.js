const path = require('path');
module.exports = {
    mode: 'production',
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
    devtool: "source-map",
};

const path = require('path');
module.exports = {
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
        filename: 'beta.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: 'public'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
        ],
    },
    mode: 'development'
}
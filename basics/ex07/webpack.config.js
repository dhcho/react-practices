const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            test: /\.css$/i,
            use:['style-loader', 'css-loader']
        }, {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(svg|jpe?g|gif|png|tiff?|bmp|ico|)$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/images',
                name: '[name].[ext]'
            }
        }, {
            test: /\.js$/i,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}
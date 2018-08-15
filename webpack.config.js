let path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
    entry: {
        index: './src/index.js',
        figure: './src/figure.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: "dist/"
    }, devServer: {
        overlay: true
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [{
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src']
                }
            }
        },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
};

module.exports = conf;

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: './src/index.js',
    output: {
        path: path.resolve(import.meta.dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    devServer: {
        static: {
          directory: path.join(import.meta.dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
};
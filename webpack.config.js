const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['mozjpeg', { quality: 50 }],
          ['optipng', { optimizationLevel: 7 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   use: [
      //     {
      //       loader: ImageMinimizerPlugin.loader,
      //       options: {
      //         severityError: 'warning', // Ignore errors on corrupted images
      //         minimizerOptions: {
      //           plugins: ['gifsicle'],
      //         },
      //       },
      //     },
      //   ],
      // }
    ],
  },
}

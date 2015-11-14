var vue = require('vue-loader')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require('vue-loader');

module.exports = {
	entry: './src/main.js',
	output: {
		path: './assets',
		publicPath: '/assets',
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: vue.withLoaders({
					css: ExtractTextPlugin.extract("css"),
					stylus: ExtractTextPlugin.extract("css!stylus")
				})
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css')
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg)$/,
				loader: 'file?name=/fonts/font-[hash:6].[ext]'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("build.css")
	],
	stylus: {
		use: [require('nib')()]
	}
}

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins = [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	]
} else {
	module.exports.devtool = '#source-map'
}

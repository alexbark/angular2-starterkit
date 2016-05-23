module.exports = {
	entry: "./app/main",
	output: {
		path: __dirname,
		filename: "./dist/bundle.js"
	},
	resolve: {
		extension: ['', '.js', '.ts']
	},
	module: {
		loaders: [{
			test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
		}]
	}
};
module.exports = {
  entry: [
		"webpack-dev-server/client?http://localhost:3002",
		"webpack/hot/dev-server",
		"./src/index.jsx"
	],
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }, // use ! to chain loaders
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }, // use ! to chain loaders
      { test: /\.(ttf|eot|png|jpg|woff2|woff|svg)($|\?)/, loader: "url-loader?limit=100000" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader?stage=0&optional=runtime"] },
    ]
  }
};

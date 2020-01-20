const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: true,
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/about.html",
            inject: true,
            // chunks: ["index"],
            filename: "about.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/contact.html",
            inject: true,
            // chunks: ["index"],
            filename: "contact.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass into css
                ]
            }
        ]
    }
});

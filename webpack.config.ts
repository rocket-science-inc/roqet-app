import * as path from "path";
import * as webpack from "webpack";
import * as locales from "./sources/locales";

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const GenerateJsonPlugin = require("generate-json-webpack-plugin");

const config: webpack.Configuration = {
    entry: {
        assets: ["./sources/assets.ts"]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    mode: process.env.NODE_ENV,
    devtool: "cheap-module-source-map",
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            use: [{
                loader: "ts-loader"
            }]
        }, {
            test: /\.css$/,
            use: (<any>ExtractTextPlugin).extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }, {
            test: /\.scss$/,
            use: (<any>ExtractTextPlugin).extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {}  
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1
                }
            }]
        }, {
            test: /\.font\.(js|json)$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: { url: false }
                }, {
                    loader: "webfonts-loader",
                    options : { publicPath: './' }
                }]
            })
        }]
    },
    plugins: <any>[
        new ExtractTextPlugin('styles/[name].styles.css'),
        new TerserPlugin(),
        ...Object.keys(locales).map((key) => {
            return new GenerateJsonPlugin(`locales/${key}.json`, locales[key])
        })
    ]
};

const android: webpack.Configuration = {
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: '[name].bundle.js'
    }
};

const common: webpack.Configuration = {
    output: {
        path: path.resolve(__dirname, "android/app/src/main/assets"),
        filename: '[name].bundle.js'
    }
};

export default [
    { ...config, ...common },
    { ...config, ...android }
];
const webpack = require("webpack");

const path = require("path");
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require("html-webpack-plugin");
// importuję odpowiedni plugin
const CssWebpackPlugin = require("mini-css-extract-plugin");
// importuję odpowiedni plugin

module.exports = function (env = {}) {
  const { production: isProd = false } = env;

  return {
    entry: "./src/App.js",
    // definiuje plik wejściowy
    mode: isProd ? "production" : "development",
    // definiuję tryb pracy webpacka
    devtool: isProd ? false : "eval-cheap-module-source-map",
    output: {
      path: path.resolve(__dirname, "build"),
      // definiuje ścieżką wyjściową
      filename: "App.[hash].js",
      // definiuję nazwę pliku wyjściowego
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          // określam jakie pliki
          // będą brane pod uwagę
          exclude: /node_modules/,
          // określam wykluczenia
          use: "babel-loader",
          // określam jaki [loader]
          // ma być wykorzystany
        },
        {
          test: /\.css$/,
          // tylko pliki z rozszerzeniem .css
          exclude: /node_modules/,
          // wykluczam pliki zwierające
          // wpisany ciąg znaków w ścieżce
          use: [
            isProd ? CssWebpackPlugin.loader : "style-loader",
            //'css-loader'
            {
              loader: "css-loader",
              options: {
                sourceMap: isProd ? false : true,
                // ustawiam identyfikację kodu źródłowego
              },
            },
          ],
          // określam kolejność wykorzystanych
          // loader-ów tj. od lewej do prawej (lub o dołu do góry)
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          // dodaję rozszerzenia obrazów
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "images",
            },
          },
          // tym razem tylko jeden loader
        },
        {
          test: /\.scss$/,
          use: [
            isProd ? CssWebpackPlugin.loader : "style-loader",
            //'css-loader',
            {
              loader: "css-loader",
              options: {
                sourceMap: isProd ? false : true,
              },
            },
            // 'sass-loader'
            {
              loader: "sass-loader",
              options: {
                sourceMap: isProd ? false : true,
                // ustawiam identyfikację kodu źródłowego
                sassOptions: {
                  outputStyle: isProd ? "compressed" : "expanded",
                  // ustawiam sposób zapisu kodu CSS
                },
              },
            },
          ],
        },
        {
          test: /\.(ttf|otf|woff|woff2)$/,
          // dodaję rozszerzenia fontów
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "fonts",
            },
          },
          // tym razem tylko jeden loader
        },
      ],
      // obecnie brak dodatkowych ustawień
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        // wskazuje plik źródłowy
        filename: "index.html",
        // określan nazwę dla pliku
      }),
      new CssWebpackPlugin({
        filename: "[name].[hash].css",
        // określam nazwę pliku css
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    resolve: {
      fallback: {
        buffer: require.resolve("buffer/"),
        stream: false,
        util: require.resolve("util/"),
        crypto: false,
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
      },
    },
  };
};
// eksportuję ustawienia dla webpack-a

"use strict";
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyPlugin = require("copy-webpack-plugin");

var PACKAGE = require('./package.json');
var version = PACKAGE.version;

module.exports = {
    mode: 'production',
    entry: ["regenerator-runtime/runtime.js", "./src/gpeWelcomePage.js"], 
    output: {
        path: path.resolve(__dirname, 'build', version),
        filename: "gpeWelcomePage.min.js",
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false,
          },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    "assumptions": {
                        "setPublicClassFields": true
                    },
                    plugins: ['@babel/plugin-proposal-object-rest-spread',
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        "@babel/plugin-proposal-class-properties",
                        ["@babel/plugin-transform-parameters"],
                        ["@babel/plugin-transform-property-mutators"],
                        ["@babel/plugin-transform-shorthand-properties"],
                        ["@babel/plugin-transform-arrow-functions", { "spec": true }],
                        ["@babel/plugin-transform-runtime",
                            {
                              "absoluteRuntime": true,
                              "corejs": false,
                              "helpers": false,
                              "regenerator": false,
                              "version": "7.0.0-beta.0"
                            }
                        ]
                    ]
                }
            },
        ],
    },
    plugins: [    
        new HtmlWebpackPlugin({
          template: './src/gpeWelcomePage.html',
          filename: "gpeWelcomePage.min.html",
          inject: false
        }),
        new CopyPlugin({
            patterns: [
              {
                from: "src/js/gpe_widgetConfig.min.js",
                to: "gpe_widgetConfig-min.js",
              },
              {
                from: "src/js/gpe_globalSettings.min.js",
                to: "gpe_globalSettings-min.js",
              },
              {
                from: "src/js/gpe_approvalURLs.min.js",
                to: "gpe_approvalURLs-min.js",
              }
            ]
        })
      ],        
    stats: {
        colors: true,
        env: true,
        ids: true,
		logging: 'warn'

    }
    // devtool: 'source-map'
};
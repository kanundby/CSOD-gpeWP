var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ["regenerator-runtime/runtime.js", "./src/gpeWelcomePage.js"], 
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'gpeWelcomePage_GTM.js',
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
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
import path from 'path';

let CLIENT_DIR = path.resolve(__dirname, './src/assets/');
let SCRIPTS_DIR = path.resolve(__dirname, CLIENT_DIR + '/js/');


let config = {

    entry: SCRIPTS_DIR + '/appReact.js',

    output: {
        path: SCRIPTS_DIR,
        filename: 'appReact.js'
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,

                include: [
                    SCRIPTS_DIR
                ],

                exclude: /node_modules/,

                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
        ],
    },
}

module.exports = config;
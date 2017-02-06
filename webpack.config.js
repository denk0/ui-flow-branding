import path from 'path';

const CLIENT_DIR = path.resolve(__dirname, './src/assets/');
const SCRIPTS_DIR = path.resolve(__dirname, CLIENT_DIR + '/js/');


const config = {

    devtool: 'source-map',

    entry: SCRIPTS_DIR + '/appReact.js',

    output: {
        path: path.resolve('dist/' + SCRIPTS_DIR),
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

export default config;
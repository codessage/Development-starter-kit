import path from 'path';

export default {
    debug: true, // Enables debugging info as we run build
    devtool: 'inline-source-map', // many options, but it affects compilation speed and bundle quality. tradeoff
    noInfo: false, // allow it display the list of files it's bundling
    entry: [
        path.resolve(__dirname, 'src/index') // magic global __dirname(path package that comes with node) is part of node that allows us get full directory name
    ], // defining the entry point of our application; you can inject webpack middle ware for hot reloading
    target: 'web', //
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    }, // where it should create dev bundle. no physical path just simulation
    plugins: [], // optional plugin to add power
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    } // file types we want it to handle
}

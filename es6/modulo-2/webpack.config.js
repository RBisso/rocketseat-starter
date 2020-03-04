module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /\.pnp.js/,
                    /\.yarn/,
                ],
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};
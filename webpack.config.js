module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js%/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}

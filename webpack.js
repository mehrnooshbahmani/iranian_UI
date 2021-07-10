const path = require('path');

module.exports = {
entry: [
__dirname + '/app.js',
__dirname + '/style.scss'
],
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'js/app.min.js',
},
module: {
rules: [
    {
        test: /\.s[ac]ss$/i,
        use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
        ],
        },
]
}
};

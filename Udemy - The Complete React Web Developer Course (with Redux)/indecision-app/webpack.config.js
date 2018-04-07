const path = require('path');

module.exports = {
    entry: "./src/app.js", // Entry point for webpack
    output: {
        path: path.join(__dirname, 'public'), // absolute path where you want to output your file
        filename: "bundle.js" 
    }
}
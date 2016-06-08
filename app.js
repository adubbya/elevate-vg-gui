// install babel hooks in the main process
require("babel-register")({
    // This will override `node_modules` ignoring - you can alternatively pass
    // an array of strings to be explicitly matched or a regex / glob
    ignore: function(filename) {
        if (filename.includes('/node_modules/ascent-core/node_modules')) {
            console.log("ignoring", filename);
            return true;
        } else if (filename.includes('/node_modules/ascent-core/')) {
            console.log("translating", filename);
            return false;
        } else if (filename.includes('/node_modules/')) {
            return true;
        }
    },
});

process.env.NODE_ENV = 'production';

require('./main.js');

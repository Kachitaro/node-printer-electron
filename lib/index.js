const path = require('path');
try {
    module.exports = require(path.join(__dirname, 'binding.js'));
} catch {
    module.exports = require(path.join(__dirname, '../build/Release/node-printer-electron.node'));
}

const path = require('path');
const native = require(path.join(__dirname, '../build/Release/node-printer-electron.node'));
module.exports = native;

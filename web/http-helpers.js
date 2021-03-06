var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers.js');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  var readStream = fs.createReadStream(asset);
  readStream.on('data', function(data) {
    var code = 200;
    callback(code, headers, res, data);
  })

  readStream.on('close', function(data) {
    //possible premature response end
  });

};



// As you progress, keep thinking about what helper functions you can put here!

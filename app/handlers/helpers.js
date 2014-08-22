/*
 * Helper Methods
 */

var path = require('path');

exports.version = '0.0.1';

exports.error = function (code, message) {
    var e = new Error(message);
    e.code = code;
    return e;
};

exports.send_success = function(res, data) {
    res.writeHead(200, {"Content-Type": "application/json"});
    var output = { error: null, data: data };
    res.end(JSON.stringify(output) + "\n");
}

exports.send_failure = function(res, err) {
    var code = (err.code) ? err.code : err.name;
    res.writeHead(code, { "Content-Type" : "application/json" });
    res.end(JSON.stringify({ error: code, message: err.message }) + "\n");
}

exports.invalid_resource = function () {
    return exports.error("invalid_resource", "The requested resource does not exist.");
};

/*
 * Handle static pages
 */

var helpers = require('./helpers.js'),
    fs = require('fs');

exports.version = "0.0.1";

/*
 * Generate a static page
 */

exports.generate = function (req, res) {

    var page = req.params.page_name;

    fs.readFile('basic.html', function (err, contents) {
        if (err) {
            send_failure(res, 500, err);
            return;
        }

        contents = contents.toString('utf8');

        // replace page name, and then dump to output.
        contents = contents.replace('{{PAGE_NAME}}', page);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(contents);
    });
};

/*
 * Chosen Control Bootstrap Express Reference Implementation
 */

/* Libraries */

var express = require('express'),
    chalk   = require('chalk'),
    app     = express();


var page_handler = require('./handlers/pages.js'),
    helpers      = require('./handlers/helpers.js');

/* Ubiquitous 'Hello World' Greeting Must be Included */

console.log(chalk.blue('[INFO]') + "Welcome to the Chosen Bootstrap Node.js Express reference implementation");

/* Load Configurations */

app.use(express.logger({immediate: true, format: chalk.blue('[INFO]')+':date :method :status :remote-addr :url '}));
app.use(express.static(__dirname + "/../static"));

/* Setup Routes */

app.get('/pages/:page_name', page_handler.generate);

app.get("/", function(req, res) {
    res.redirect("/pages/home");
    res.end();
});

app.get("*", four_oh_four);

function four_oh_four(req, res) {
    res.writeHead(404, { "Content-Type" : "application/json" });
    res.end(JSON.stringify(helpers.invalid_resource()) + "\n");
}

/* Start Server */

console.log(chalk.blue('[INFO]') + "Ready to accept requests on " + chalk.green.bold("port 8080."));
console.log(chalk.blue('[INFO]') + "Please use '" + chalk.green.bold('Ctrl-C') + "' to terminate server process.");
app.listen(process.env.PORT || 8080);

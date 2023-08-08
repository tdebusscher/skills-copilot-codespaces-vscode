// Create web server
// Create a web server that can respond to requests for /hello and /goodbye
// with an appropriate greeting.
// If the URL path doesn't exist, then it should return a 404 response code.

// var express = require('express');
// var app = express();
// var port = process.argv[2];

// app.get('/home', function(req, res) {
//   res.end('Hello World!');
// });

// app.listen(port);

// Path: static.js
// Create web server
// Apply static middleware to serve index.html file without any routes.
// Your solution must listen on the port number supplied by process.argv[2].
// The index.html file is provided and usable via process.argv[3] value of the path to it.
// However, you can use your own file with this content:

// var express = require('express');
// var app = express();
// var port = process.argv[2];
// var path = process.argv[3];

// app.use(express.static(path || path.join(__dirname, 'public')));

// app.listen(port);

// Path: jade.js
// Create web server
// Create an Express.js app with a home page rendered by the Jade template engine.
// The homepage should respond to /home.
// The view should show the current date using 'new Date.toDateString()'.
// We use 'toDateString()' to simply return the date in a human-readable format
// without the time.

// var express = require('express');
// var app = express();
// var port = process.argv[2];
// var path = process.argv[3];

// app.set('view engine', 'jade');
// app.set('views', path || path.join(__dirname, 'templates'));

// app.get('/home', function(req, res) {
//   res.render('index', { date: new Date().toDateString() });
// });

// app.listen(port);

// Path: good-old-form.js
// Create web server
// Write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints backwards the str value.

// var express = require('express');
// var app = express();
// var port = process.argv[2];
// var bodyparser = require('body-parser');

// app.use(bodyparser.urlencoded({ extended: false }));
// app.post('/form', function(req, res) {
//   res.end(req.body.str
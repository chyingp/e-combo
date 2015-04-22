var express = require('express'),
	app = express(),
	router = require('./routers'),
	compression = require('compression');

app.set('root', './');
app.use(compression({threshold: 0}));	// gzip
app.use('/c/=/', router);
app.use(express.static(__dirname + '/public'));
app.listen(3000);
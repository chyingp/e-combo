var express = require('express'),
	app = express(),
	router = require('./routers');

app.set('root', './');
app.use('/c/=/', router);
app.use(express.static(__dirname + '/public'));
app.listen(3000);
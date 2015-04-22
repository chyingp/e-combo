var express = require('express'),
	router = express.Router(),
	url = require('url'),
	fs = require('fs'),
	path = require('path'),
	compress = require('../lib/compress');

router.use(function(req, res, next) {

	var obj = url.parse(req.path),
		paths = obj.path.replace(/^\//, '').split(','),
		content = '',
		baseDir = path.join(req.app.get('root'), 'public'),
		resourcePath = '',
		ext = path.extname(paths[0]),
		fileTypes = {
			'.js': 'application/javascript',
			'.css': 'text/css'
		};
	
	content = paths.map(function(filepath){
		resourcePath = path.join(baseDir, filepath);
		return '/* original file path: '+ filepath+' */\n\n' +
				fs.readFileSync(resourcePath).toString();
	}).join('\n\n');

	if(req.query['max-age']){
		res.header('max-age', req.query['max-age']);
	}

	res.set('Content-Type', fileTypes[ext]);
	res.locals.body = content;
	res.locals.ext = ext;
	next();
});

router.use(compress());

module.exports = router;
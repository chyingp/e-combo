var cssmin = require('cssmin');
var UglifyJS = require("uglify-js");

module.exports = function(){
	return function(req, res, next) {
		var ext = res.locals.ext,
			content = res.locals.body;

		if(req.query.compress!=0){
			if(ext=='.js'){
				content = UglifyJS.minify(content, {fromString: true}).code;
			}else{
				content = cssmin(content);
			}
		}

		res.send(content);
	};
};
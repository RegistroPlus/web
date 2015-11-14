var superagent = require('superagent');

module.exports = function(options, callback) {
	var agent = superagent(options['method'], options['endpoint']);
		
	agent = agent.type('application/json').accept('application/json');
	
	if (options['body']) {
		agent = agent.send(options['body']);
	}
	
	if (options['query']) {
		agent = agent.query(options['query']);
	}
	
	agent.end(function(err, res) {
		callback(err, res);
	});
};

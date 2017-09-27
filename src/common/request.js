var superagent = require('superagent');

module.exports = function(options, callback) {
	// Default HTTP method is GET
	if (!options['method']) {
		options['method'] = 'GET';
	}
	
	// Compose full endpoint
	options['endpoint'] = '/api/v1' + options['endpoint'];
	
	// Create the agent with method+endpoint
	var agent = superagent(options['method'], options['endpoint']);
	
	// Set the Accept header. We eat only JSON
	agent = agent.accept('application/json');
	
	// Get the token and set the header
	var token = localStorage.getItem('token');
	if (token) {
		agent = agent.set('Auth-Token', token);
	}
	
	// Set request body, if any
	if (options['body']) {
		agent = agent.type('application/json').send(options['body']);
	}
	
	// Set query parameters, if any
	if (options['query']) {
		agent = agent.query(options['query']);
	}
	
	// Start the HTTP request
	agent.end(function(err, res) {
		callback(err, res);
	});
};

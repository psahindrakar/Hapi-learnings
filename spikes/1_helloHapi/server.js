var Hapi = require('hapi');
var server = new Hapi.Server();

// On connection, by default, the host is set to localhost and the port is generated randomly based on ports that don’t
// require system administrator access to use, and that are available. The next logical steps would be to set a port for
// our server to start on so that we know it’s the same each time. 
server.connection({
	port : 8088
});

server.route({
	method : 'GET',
	path : '/',
	handler : function(request, reply) {
		return reply('Hello Happi!');
	}
});

server.start(function(err) {
	console.log(server.info.uri);
});

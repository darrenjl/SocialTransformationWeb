mongodb_connection_string = 'mongodb://localhost/socialtransformation';
	//take advantage of openshift env vars when available:
	if(process.env.OPENSHIFT_MONGODB_DB_URL){
	  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + 'socialtransformation';
	}

module.exports = {
	//provide a sensible default for local development
	
	'url' : mongodb_connection_string 

};
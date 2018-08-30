//comando             node server/models/config.js

const config = {
		user: 'postgres',
		host: '127.0.0.1',
		database: 'todo',
		password: 'root',
		port: 5432,
		}

// const pg = require('pg');
// const connectionString = process.env.DATABASE_URL || config;

// const client = new pg.Client(connectionString);
// client.connect();
// const query = client.query(
// 	  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// 	query.on('end', () => { client.end(); });
	
	
		module.exports = config;
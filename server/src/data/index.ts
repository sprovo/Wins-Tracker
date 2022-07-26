import { MongoClient } from 'mongodb';

async function listDatabases(client: MongoClient) {
	const databasesList = await client.db().admin().listDatabases();
	console.log(databasesList);
	databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function connectToMongo() {
	const URI_STRING = process.env.MONGO_DB_CONNECTION_STRING || '';
	const client = new MongoClient(URI_STRING);

	try {
		// Connect to the mongo cluster
		await client.connect();
		// Make DB calls
		await listDatabases(client);
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}
}

const DB_SERVICE = {
	connect: connectToMongo
};

export { DB_SERVICE };


const { MongoClient, ServerApiVersion } = require('mongodb');

//Force DNS resolution to use Google's public DNS servers
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Load environment variables from .env file
require('dotenv').config();
const uri = process.env.URI;


// Create a new MongoClient
async function main(){
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB!! ✔️");
        // Make the appropriate DB calls
        await listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();
  
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports = main;
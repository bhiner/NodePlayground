const { MongoClient } = require('mongodb');

async function main(){
    //* Removed for github
    const uri = 'redacted';
    const client = new MongoClient(uri);
    
    await client.connect();
    
    await listDatabases(client);
    
    await client.close();
    
    async function listDatabases(client){
        databasesList = await client.db().admin().listDatabases();
    
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    };
}

main();
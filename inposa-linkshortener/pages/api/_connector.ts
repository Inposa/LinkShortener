import { MongoClient } from 'mongodb';

let cacheDb;

export async function connectToDatabase() {
    if(cacheDb){
        return cacheDb;
    }
    console.log("connexion à la bdd...")
    const client = new MongoClient(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

    cacheDb = client; 
    return await client.connect();
}
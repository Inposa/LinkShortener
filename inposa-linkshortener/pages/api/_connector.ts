import { MongoClient } from "mongodb";

let cacheDb;

export async function connectToDatabase() {
  if (cacheDb) {
    return cacheDb;
  }
  console.log("connexion à la bdd...");
  console.log(
    "Test env : \nVercel :" +
      process.env.VERCEL_URL +
      ", Env pass :" +
      process.env.MONGODB_URI
  );

  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cacheDb = client;
  return await client.connect();
}

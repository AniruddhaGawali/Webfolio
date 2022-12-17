const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  client.connect();
  const db = client.db("Projects");
  const collection = await db.collection("project").aggregate().toArray();

  res.json({
    status: 200,
    message: "Get data has successfully",
    data: collection,
  });
}

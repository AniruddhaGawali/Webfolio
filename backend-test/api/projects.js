const express = require("express");
const router = express.Router();

const { MongoClient } = require("mongodb");

router.get("/", async (req, res) => {
  const uri =
    "mongodb+srv://aniruddhagawali:7fBW5clCtDg4IlNA@cluster0.opnu03h.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    client.connect();

    const db = client.db("Projects");
    const collection = await db.collection("project").aggregate().toArray();
    // .aggregate().toArray() : this filters the main data from the cluster of data

    res.json({
      status: 200,
      message: "Data Get Successfull",
      data: collection,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;

// const { MongoClient, ServerApiVersion } = require("mongodb");
// require("dotenv").config();
// const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
// const client = new MongoClient(uri);

// export default async function handler(req, res) {
//   client.connect();
//   const db = client.db("Projects");
//   const collection = await db.collection("project").aggregate().toArray();

//   res.json({
//     status: 200,
//     message: "Get data has successfully",
//     data: collection,
//   });
// }

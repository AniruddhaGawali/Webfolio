const express = require("express");
const router = express.Router();

const { MongoClient } = require("mongodb");
const { MONGODB_URI } = require("../config");

router.get("/", async (req, res) => {
  const client = new MongoClient(MONGODB_URI);

  try {
    client.connect();

    const db = client.db("WebfolioData");
    const collection = await db.collection("Timeline").aggregate().toArray();
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

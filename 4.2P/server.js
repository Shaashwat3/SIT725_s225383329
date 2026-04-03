const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://127.0.0.1:27017/studyResourcesDB");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

const resourceSchema = new mongoose.Schema({
  resourceName: String,
  subject: String,
  difficulty: String,
  week: Number,
  thumbnail: String
});

const Resource = mongoose.model("Resource", resourceSchema);

app.get("/api/resources", async (req, res) => {
  try {
    const resources = await Resource.find({});
    res.json({
      statusCode: 200,
      data: resources,
      message: "Success"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
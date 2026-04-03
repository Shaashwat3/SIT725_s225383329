const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/studyResourcesDB");

const resourceSchema = new mongoose.Schema({
  resourceName: String,
  subject: String,
  difficulty: String,
  week: Number,
  thumbnail: String
});

const Resource = mongoose.model("Resource", resourceSchema);

const sampleData = [
  {
    resourceName: "HTML Basics",
    subject: "Web Development",
    difficulty: "Beginner",
    week: 1,
    thumbnail: "images/image1.jpg"
  },
  {
    resourceName: "CSS Styling Guide",
    subject: "Web Development",
    difficulty: "Intermediate",
    week: 2,
    thumbnail: "images/image2.jpg"
  },
  {
    resourceName: "JavaScript Practice",
    subject: "Programming",
    difficulty: "Intermediate",
    week: 3,
    thumbnail: "images/image3.jpg"
  }
];

async function seedDB() {
  try {
    await Resource.deleteMany({});
    await Resource.insertMany(sampleData);
    console.log("Database seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    console.log("Error seeding database:", error);
    mongoose.connection.close();
  }
}

seedDB();
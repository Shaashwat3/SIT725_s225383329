var express = require("express");
const path = require("path");
var app = express();
var port = process.env.PORT || 3001;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// In-memory array to store quotes
let quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot; but make it hot by striking."
];


// GET random quote
app.get("/api/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

// POST add a new quote
app.post("/api/quote", (req, res) => {
  const { quote } = req.body;

  if (!quote || typeof quote !== "string") {
    return res.status(400).json({ error: "Please provide a valid quote." });
  }

  quotes.push(quote);
  res.json({ message: "Quote added successfully.", quotes });
});


app.get("/api/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      error: "Please provide valid numbers for 'a' and 'b'."
    });
  }

  const sum = a + b;

  res.json({
    operation: "addition",
    a,
    b,
    result: sum
  });
});

// Optional POST version for addition
// Example body: { "a": 5, "b": 10 }
app.post("/api/add", (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({
      error: "Please provide valid numeric values for 'a' and 'b'."
    });
  }

  const sum = a + b;

  res.json({
    operation: "addition",
    a,
    b,
    result: sum
  });
});


app.get("/health", (req, res) => {
  res.send("Server is healthy!");
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
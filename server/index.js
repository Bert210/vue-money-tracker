const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());

const port = process.env.PORT || 5000;

const posts = require("./routes/api/posts.js");

app.use("/api/posts", posts);

app.get("/", (req, res) => {
  return res.send("Hello!");
});

app.listen(port, () => console.log(`Server started on port ${port}`));

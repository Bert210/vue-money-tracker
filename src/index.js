const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("./dist"));

app.set("view engine", "html");

app.get("/", (req, res) => res.send(`<a href="/imgs/cod.jpeg">Link</a>`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

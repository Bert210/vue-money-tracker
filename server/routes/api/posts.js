const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => res.json(response.data))
    .catch(err => console.log(err));
  // .then(json => res.json(json));
});

module.exports = router;

const express = require("express");
const categories = require("./data/categories.json");
const news = require("./data/news.json");
var cors = require("cors");

const app = express();
const port = process.env.port || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Beyond News Buzz running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (parseInt(id, 10) === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter(
      (n) => parseInt(n.category_id, 10) === parseInt(id, 20)
    );
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log("Buzz api is running ");
});

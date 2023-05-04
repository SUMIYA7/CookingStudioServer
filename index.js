const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const chefs = require("./data/chefs.json");
const recipe = require("./data/recipe.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Assignment 10 is running");
});

//all chefs
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

// //each  chefs
app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(recipe);
  } else {
    const categoryChefs = recipe.filter((n) => parseInt(n.category_id) === id);
    res.send(categoryChefs);
  }
});



//all recipe
app.get("/recipe", (req, res) => {
  res.send(recipe);
});

// //specific recipe
app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipe = recipe.find((r) => r._id === id);
  res.send(selectedRecipe);
});


app.listen(port, () => {
  console.log(`Assignment-10-server listening on port ${port}`);
});

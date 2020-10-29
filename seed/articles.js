const db = require("../db/connection");
const Article = require("../models/article");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const article = [
    {
      title: "Top 10 DIY Projects to try this weekend",
      imgURL:
        "./images/pexels-ivan-samkov-4491881.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "GreenHouse",
    },
    {
      title: "Things they don't tell you about Solar Panels",
      imgURL:
        "./images/pexels-pixabay-159397.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "GreenHouse",
    },
    {
      title: "Grass in the Suburbs? Not in this climate!",
      imgURL:
        "./images/pexels-pixabay-280222.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "GreenHouse",
    },
  ];
  await Article.insertMany(articles);
  console.log("Created an article!");
};
const run = async () => {
  await main();
  db.close();
};

run();


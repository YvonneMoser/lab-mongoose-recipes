const mongoose = require('mongoose');
const data = require('./data.js');
const dbName = `recipeBook`;

const Recipe = require(`./recipeSchema.js`);


mongoose.connect(`mongodb://localhost/${dbName}`)
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  let recipe1 = {
    title: 'Asian Glazed Chicken',
    level: 'Amateur Chef',
    ingredients: ['1/2 cup rice vinegar', '5 tablespoons honey', '1/3 cup soy sauce (such as Silver Swan®)', '1/4 cup Asian (toasted) sesame oil', '3 tablespoons Asian chili garlic sauce', '3 tablespoons minced garlic', 'salt to taste', '8 skinless, boneless chicken thighs'],
    cuisine: 'Asian',
    dishType: ['Dish'],
    image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
    duration: 40,
    creator: 'Chef LePapu'
  }

  Recipe.create(recipe1, (err, result) => {
    if (err) console.log(err);
    else {console.log(result.title)}
  });

  Recipe.insertMany(data)
  .then((result) => console.log(result))
  .then((titleResult) => console.log(titleResult.title))
  .catch(err => console.log(err));

  console.log(data);


  Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {$set: {duration: 100}})
    .then((result) => console.log("Recipe was updated", result))
    .catch((err) => console.log(err));

  Recipe.deleteOne({title: "Carrot Cake"})
  .then((result) => console.log("Success deleting", result))
  .catch((err) => console.log(err));
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: String, required: true, unique: true},
  level: {enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
  ingredients: {type: []},
  cuisine: {type: String, required: true},
  dishType: { enum: ["Breakfast", 'Dish' ,"Snack", "Drink" ,"Dessert","Other"]},
  image: {type: String, default: "https://images.media-allrecipes.com/images/75131.jpg"},
  duration: {type: Number, min: 1},
  creator: {type: String},
  created: {type: Date}
})


const Recipe = mongoose.model(`Recipe`, recipeSchema);

module.exports = Recipe;

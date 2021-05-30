const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelName = 'Career';

const CareerSchema = new Schema({
  title: String,
  photo: String
});

module.exports = mongoose.model(modelName, CareerSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelName = 'Product';

const ProductSchema = new Schema({
  photo: String,
  information: String,
  title: String,
  area: { type: Schema.Types.ObjectId, ref: "Area" },
  people: [{ type: Schema.Types.ObjectId, ref: "Person" }],
});

module.exports = mongoose.model(modelName, ProductSchema);


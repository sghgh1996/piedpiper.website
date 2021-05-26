const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  people: [{ type: Schema.Types.ObjectId, ref: "Person" }],
  title: String,
  overview: String,
  solutions: String,
  photo: String,
});


module.exports = mongoose.model("Area", AreaSchema);

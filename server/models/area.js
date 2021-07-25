const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
  title: String,
  overview: String,
  description: String,
  logo: String,
  solutions: [{_id: false, image: String, text: String, title: String}],
  photo: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  people: [{ type: Schema.Types.ObjectId, ref: "Person" }],
});


module.exports = mongoose.model("Area", AreaSchema);

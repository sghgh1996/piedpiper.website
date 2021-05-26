const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelName = 'Person';

const PersonSchema = new Schema({
  name: String,
  photo: String,
  description: String,
  contact: {
    phone: String,
    email: String
  },
  role: { type: Schema.Types.ObjectId, ref: "Career" },
  area: { type: Schema.Types.ObjectId, ref: "Area" },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

module.exports = mongoose.model(modelName, PersonSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelName = 'Responsibility';

const ResponsibilitySchema = new Schema({
  person_id: { type: Schema.Types.ObjectId, ref: "Person" },
  role_id: { type: Schema.Types.ObjectId, ref: "Career" },
  product_id: { type: Schema.Types.ObjectId, ref: "Product" }
});

module.exports = mongoose.model(modelName, ResponsibilitySchema);

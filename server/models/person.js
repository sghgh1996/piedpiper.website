const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelName = 'Person';

const PersonSchema = new Schema({
  name: String,
  photo: String,
  description: String,
  area: { type: Schema.Types.ObjectId, ref: "Area" },
  contact: {
    phone: String,
    email: String
  }
});

module.exports = mongoose.model(modelName, PersonSchema);

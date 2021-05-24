const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelName = 'Person';

const PersonSchema = new Schema({
  name: String,
  photo: String,
  description: String,
  role: { type: Schema.Types.ObjectId, ref: "Career" },
  contact: {
    phone: String,
    Email: String
  }
});

module.exports = mongoose.model(modelName, PersonSchema);

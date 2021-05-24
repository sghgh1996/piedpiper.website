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

// get all persons
PersonSchema.methods.getAllPersons = async function() {
  let result = await this.model(modelName).find({});
  return result;
}

module.exports = mongoose.model(modelName, PersonSchema);

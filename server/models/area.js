const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
  services: { type: Schema.Types.ObjectId, ref: "Services" },
  people: { type: Schema.Types.ObjectId, ref: "People" },
  id: Number,
  title: String,
  description: String,
  photo: String,
});

AreaSchema.addArea = function(title) {

}

module.exports = mongoose.model("Area", AreaSchema);

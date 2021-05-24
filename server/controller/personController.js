let Person = require('../models/person')

exports.findAll = async function (req, res) {
  let result = await Person.find({}).populate();
  res.json(result);
}

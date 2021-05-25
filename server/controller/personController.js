let Person = require('../models/person')

const invalidRequest = {msg: 'Invalid Request'};
const notFound = {msg: 'Not Found'};

const Validator = require('validatorjs');

exports.findAll = async function (req, res) {
  let result = await Person.find({}).populate();
  res.json(result);
}

exports.add = async function (req, res) {
  // validate body
  let validator = new Validator(req.body,{
    name: 'required',
    description: 'required',
    role: 'required',
    contact: {
      phone: 'required',
      email: 'required|email'
    }
  })
  let result = await validator.check()
  if(!result) {
    res.status(400).json(invalidRequest);
    return
  }

  // validate file exist
  console.log(req.files[0])
  result = false
  for(let i= 0; i < req.files.length; i++) {
    if(req.files[i].fieldname === 'photo') {
      req.body.photo = req.files[i].path
      result = true
      break
    }
  }
  if(!result) {
    res.status(400).json(invalidRequest);
    return
  }


  let person = new Person(req.body)
  person = await person.save()
  result = await Person.findById(person._id).populate('role').select('-__v')
  res.json(result)

}

let Area = require('../models/area')

const invalidRequest = {msg: 'Invalid Request'};
const notFound = {msg: 'Not Found'};

const Validator = require('validatorjs');

exports.findAll = async function (req, res) {
  let result = await Area.find({}).select('-__v');
  res.json(result);
}

exports.add = async function (req, res) {
  // validate body
  let validator = new Validator(req.body,{
    title: 'required',
    overview: 'required',
    solutions: 'required',
  })
  let result = await validator.check();
  if(!result) {
    res.status(400).json(invalidRequest);
    return
  }

  // validate file exist
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


  let area = new Area(req.body)
  area = await area.save()
  result = await Area.findById(area._id).select('-__v')
  res.json(result)

}

exports.findById = async function (req, res) {
  if(!req.params.id) {
    res.status(400).json(invalidRequest);
    return;
  }
  try {
    let result = await Area.findById(req.params.id).select('-__v');
    if(result) {
      res.json(result);
    }else{
      res.status(404).json(notFound);
    }
  }catch (e) {
    res.status(400).json(invalidRequest);
  }
}

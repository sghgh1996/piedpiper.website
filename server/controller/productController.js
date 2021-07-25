let Product = require('../models/product')
let Area = require('../models/area')

const invalidRequest = {msg: 'Invalid Request'};
const notFound = {msg: 'Not Found'};

const Validator = require('validatorjs');

exports.findAll = async function (req, res) {
  let result = await Product.find({}).populate('area').populate('people').select('-__v');
  res.json(result);
}

exports.add = async function (req, res) {
  // validate body
  let validator = new Validator(req.body,{
    title: 'required',
    information: 'required',
    area: 'required'
  })
  let result = await validator.check();
  if(!result) {
    console.log('hi')
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

  let product = new Product(req.body)
  product = await product.save()
  result = await Product.findById(product._id).populate('area').populate('people').select('-__v')

  // try to find the area
  try {
    let area = await Area.findById(req.body.area).select('-__v');
    if(area) {
      area.products.push(product._id)
      await area.save();
    }else{
      res.status(404).json({msg: `area ${req.body.area} not exists`});
      return
    }
  }catch (e) {
    console.log(e)
    res.status(400).json({msg: `area cause invalid request`});
    return
  }
  res.json(result)

}

exports.findById = async function (req, res) {
  if(!req.params.id) {
    res.status(400).json(invalidRequest);
    return;
  }
  try {
    let result = await Product.findById(req.params.id).populate('area').populate('people').select('-__v');
    if(result) {
      res.json(result);
    }else{
      res.status(404).json(notFound);
    }
  }catch (e) {
    res.status(400).json(invalidRequest);
  }
}

exports.findNewProducts = async function (req, res) {
  if(!req.params.count) {
    res.status(400).json(invalidRequest);
    return;
  }
  try {
    let count = parseInt(req.params.count)
    let result = await Product.find().sort({'_id': -1}).limit(count).populate('area').populate('people').select('-__v');
    if(result) {
      res.json(result);
    }else{
      res.status(404).json(notFound);
    }
  }catch (e) {
    console.log(e)
    res.status(400).json(invalidRequest);
  }
}

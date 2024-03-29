let Career = require('../models/career')

const invalidRequest = {msg: 'Invalid Request'};
const notFound = {msg: 'Not Found'};

exports.findAll = async function (req, res) {
  let result = await Career.find({}).select('-__v');
  res.json(result);
}

exports.find = async function (req, res) {
  if(!req.params.id) {
    res.status(400).json(invalidRequest);
    return;
  }
  try {
    let result = await Career.findOne({ _id: req.params.id }).select('-__v');
    if(result) {
      res.json(result);
    }else{
      res.status(404).json(notFound);
    }
  }catch (e) {
    res.status(400).json(invalidRequest);
  }
}

exports.add = async function (req, res) {
  // let result = await Career.find({});
  if(!req.body.title) {
    res.status(400).json(invalidRequest);
    return;
  }

  let career = await Career.findOne({title: req.body.title}).select('-__v')
  if(career) {
    res.json(career);
    return
  }

  result = false
  for (let i = 0; i < req.files.length; i++) {
    if (req.files[i].fieldname === 'photo') {
      req.body.photo = req.files[i].path
      result = true
      break
    }
  }
  if (!result) {
    res.status(400).json(invalidRequest)
    return
  }

  career = new Career(req.body);
  career = await career.save();

  res.json({_id: career._id, title: career.title});

}

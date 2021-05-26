let Person = require('../models/person')
let Area = require('../models/area')
let Product = require('../models/product')

const invalidRequest = { msg: 'Invalid Request' }
const notFound = { msg: 'Not Found' }

const Validator = require('validatorjs')

exports.findAll = async function (req, res) {
  let result = await Person.find({}).populate('role').select('-__v')
  res.json(result)
}

exports.add = async function (req, res) {
  // validate body
  let validator = new Validator(req.body, {
    name: 'required',
    description: 'required',
    role: 'required',
    area: 'required',
    contact: {
      phone: 'required',
      email: 'required|email'
    }
  })
  let result = await validator.check()
  if (!result) {
    res.status(400).json(invalidRequest)
    return
  }

  // validate file exist
  console.log(req.files[0])
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

  let person = new Person(req.body)
  person = await person.save()
  result = await Person.findById(person._id).populate('role').select('-__v')

  // try to find the area
  try {
    let area = await Area.findById(req.body.area).select('-__v')
    if (area) {
      area.people.push(person._id)
      await area.save()
    } else {
      res.status(404).json({ msg: `area ${req.body.area} not exists` })
      return
    }
  } catch (e) {
    console.log(e)
    res.status(400).json({ msg: `area cause invalid request` })
    return
  }

  res.json(result)

}

exports.findByRole = async function (req, res) {
  if (!req.params.id) {
    res.status(400).json(invalidRequest)
    return
  }
  try {

    let result = await Person.find({ role: req.params.id }).populate('role').select('-__v')
    console.log(result)
    if (result) {
      res.json(result)
    } else {
      res.status(404).json(notFound)
    }
  } catch (e) {
    res.status(400).json(invalidRequest)
  }
}

exports.findById = async function (req, res) {
  if (!req.params.id) {
    res.status(400).json(invalidRequest)
    return
  }
  try {
    let result = await Person.findById(req.params.id).populate('role').select('-__v')
    if (result) {
      res.json(result)
    } else {
      res.status(404).json(notFound)
    }
  } catch (e) {
    res.status(400).json(invalidRequest)
  }
}

exports.assigns = async function (req, res) {
  // validate body
  let validator = new Validator(req.body, {
    product_id: 'required',
    person_id: 'required',
  })
  let result = await validator.check()
  if (!result) {
    res.status(400).json(invalidRequest)
    return
  }
  try {
    let person = await Person.findById(req.body.person_id).select('-__v')
    if (!person) {
      res.status(404).json({ msg: `peron ${person._id} Not found` })
      return
    }

    let exist = false;
    for (let i = 0; i < person.products.length; i++) {
      if(person.products[i] == req.body.product_id) {
        exist = true;
      }
    }
    if(!exist) {
      person.products.push(req.body.product_id)
    }

    let product = await Product.findById(req.body.product_id).select('-__v')
    if (!product) {
      res.status(404).json({ msg: `product ${product._id} Not found` })
      return
    }
    exist = false;
    for (let i = 0; i < product.people.length; i++) {
      if(product.people[i] == req.body.person_id) {
        exist = true;
      }
    }
    if(!exist) {
      product.people.push(req.body.person_id)
    }

    await person.save()
    await product.save()
    res.json({'person': person, 'product': product})
  } catch (e) {
    res.status(400).json(invalidRequest)
  }
}

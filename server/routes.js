const router = require('express').Router()

let Person = require('./models/person')

router.get('/', (req, res) => {

  // let x = persons.getAllPersons();
  let p = new Person()
  p.getAllPersons().then((persons) =>{
    console.log(persons)
    res.send('Hello World! 2' + persons);
  })


})

module.exports = router

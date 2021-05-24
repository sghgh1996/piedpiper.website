const express = require('express')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser");

dotenv.config()

const app = express()
const port = 7474
let routes = require('./routes.js')

// kill it by ctrl + C
process.on('SIGINT', function() {
  console.log("Caught interrupt signal");
  process.exit(1);
});

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extendend: false }));

app.use(routes)

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Example app listening at http://localhost:${port}`)
  }
})

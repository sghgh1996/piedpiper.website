const express = require('express')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const multer = require('multer');

// read .env file
dotenv.config()

// storage config for files
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.IMAGES);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});
let upload = multer({storage: storage});

const app = express()
const port = 7474
let routes = require('./routes.js')

// kill it by ctrl + C
process.on('SIGINT', function() {
  console.log("Caught interrupt signal");
  process.exit(1);
});

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extendend: true }));

// form-urlencoded
// for parsing multipart/form-data
app.use(upload.any());

app.use(routes)

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Example app listening at http://localhost:${port}`)
  }
})

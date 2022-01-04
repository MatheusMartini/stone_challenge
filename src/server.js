const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const stoneRoutes = require('./routes')

require('dotenv').config()

const port = process.env.PORT
const mongo_url = process.env.MONGO_URL

mongoose.Promise = global.Promise;

mongoose.connect(mongo_url, {useNewUrlParser: true})
  .then(()=>{{console.log("bombou")}})
  .catch((err)=>{console.log("falhou",err)
  process.exit();
})

const app = express()

//app.use(bodyParser.urlencoded({extends : true}));

app.use(bodyParser.json())

app.use('/', stoneRoutes)

app.listen(port, () => {
  console.log(`funcionando na porta http://localhost:${port}`)
})



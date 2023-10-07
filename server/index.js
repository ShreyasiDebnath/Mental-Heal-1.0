const express = require ("express");
const cors = require("cors");
const mongoose = require("mongoose");

const connectToMongo = require('./db')

connectToMongo();

const app = express()
const port = 80

app.use(cors())
app.use(express.json());


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
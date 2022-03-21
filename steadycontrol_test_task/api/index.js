const express = require('express')
const app = express()
const {initializeDbModels,syncDbTables} = require('./utils/db')
const sequelize = require('./db_models')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async function initDB() {
  try {
    initializeDbModels(sequelize)
    await syncDbTables()
  } catch (err) {
    console.log(err)
  }
})()

app.use('/api',require('./routes/api'))
app.use((req, res) =>
  res.status(404).json({ error: { type: 'NOT FOUND', code: 404 } }))

app.listen(PORT,() => console.log(`app listening on port ${PORT}`))
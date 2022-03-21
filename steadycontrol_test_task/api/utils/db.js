const Citizens = require('../db_models/citizens')
const Cities = require('../db_models/cities')
const Groups = require('../db_models/groups')
const setUpAssociations = require('../db_models/setUpAssociations')

function initializeDbModels(sequelize) {
  Cities.initialize(sequelize)
  Citizens.initialize(sequelize)
  Groups.initialize(sequelize)

  setUpAssociations()
}

async function syncDbTables() {
  await Cities.sync({ alter: true })
  await Citizens.sync({ alter: true })
  await Groups.sync({ alter: true })
}

module.exports = {
  initializeDbModels,
  syncDbTables
}
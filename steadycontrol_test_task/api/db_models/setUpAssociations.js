const Cities = require('../db_models/cities')
const Citizens = require('./citizens')
const Groups = require('../db_models/groups')

module.exports = () => {
  Citizens.belongsTo(Cities, { as: 'city', foreignKey: 'city_id' })
  Cities.hasMany(Citizens, { as: 'citizen', foreignKey: 'city_id' })

  Groups.belongsTo(Citizens, { as: 'member', foreignKey: 'citizen_id' })
  Citizens.hasMany(Groups, { as: 'group', foreignKey: 'citizen_id' })
}

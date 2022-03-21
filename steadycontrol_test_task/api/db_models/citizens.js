const Sequelize = require('sequelize')

class Citizens extends Sequelize.Model {
  static initialize(sequelize) {
    Citizens.init({
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false
        },
        city_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: { model: 'cities', key: 'id' }
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      {
        sequelize: sequelize,
        modelName: 'Citizens',
        tableName: 'citizens'
      })
  }
}

module.exports = Citizens


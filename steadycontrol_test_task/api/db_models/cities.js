const Sequelize = require('sequelize')

class Cities extends Sequelize.Model {
  static initialize(sequelize) {
    Cities.init({
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize: sequelize,
        modelName: 'Cities',
        tableName: 'cities'
      })
  }
}

module.exports = Cities


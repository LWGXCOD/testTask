const Sequelize = require('sequelize')

class Groups extends Sequelize.Model {
  static initialize(sequelize) {
    Groups.init({
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false
        },
        citizen_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: { model: 'citizens', key: 'id' }
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        priority: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize: sequelize,
        modelName: 'Groups',
        tableName: 'groups'
      })
  }
}

module.exports = Groups


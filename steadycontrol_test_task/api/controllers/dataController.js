const Cities = require('../db_models/cities')
const Citizens = require('../db_models/citizens')
const Groups = require('../db_models/groups')
const { v4 } = require('uuid')

module.exports = {
  async addCities(req, res) {
    if (!Object.keys(req.body).length) res.send(400, 'Request body is empty')
    if (!Array.isArray(req.body)) res.send(400, 'Incorrect body')

    const cities = req.body
    await Cities.bulkCreate(cities)
    res.send(200, 'Cities added to database')
  },
  async addCitizens(req, res) {
    if (!Object.keys(req.body).length) res.send(400, 'Request body is empty')
    if (!Array.isArray(req.body)) res.send(400, 'Incorrect body')

    let citizens = req.body
    const groups = []
    citizens = citizens.map((citizen) => {
      citizen.id = v4()
      let priority = 10
      citizen.groups.forEach((group) => {
        group.id = v4()
        group.citizen_id = citizen.id
        group.priority = priority
        priority += 10
        groups.push(group)
      })
      delete citizen.groups
      return citizen
    })
    console.log(citizens, groups)
    try {
      await Citizens.bulkCreate(citizens)
      await Groups.bulkCreate(groups)
    } catch (err) {
      console.log(err)
    }

    res.send(200)
  },
  async getData(req, res) {

    let citizens = await Citizens.findAll({
      attributes: ['id', 'name'],
      include: [{
        model: Groups,
        as: 'group',
        attributes: ['type', 'name', 'priority']
      },
        {
          model: Cities,
          as: 'city',
          attributes: ['name','data']
        }],
      order: [
        [{ model: Groups, as: 'group' }, 'priority', 'ASC']
      ]
    })

    res.json(citizens)
  }
}
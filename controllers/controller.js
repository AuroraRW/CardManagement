const Card = require('../models/card')

const getAllCards = async (req, res)=> {
    try {
        const cards = await Card.find()
        res.json(cards)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getOneCard = async (req, res)=> {
    let card
    try {
      card = await Card.findById(req.params.id)
      if (card == null) {
        return res.status(404).json({ message: 'Cannot find card' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.card = card
    res.json(res.card)
}

const createOneCard = async (req, res) => {
    const card = new Card({
        name: req.body.name,
        description: req.body.description,
        level: req.body.level,
        point: req.body.point,
        imageurl: req.body.imageurl
    })

    try {
        const newCard = await card.save()
        res.status(201).json(newCard)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {getAllCards, getOneCard, createOneCard}
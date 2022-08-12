const router = require('express').Router()
const mongoose = require('mongoose')

const { isAuthenticated } = require('../middleware/jwt.middleware')
const Event = require('../models/Event.model')
const Order = require('../models/Order.model')

router.get('/orders/:id',  (req, res, next) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({message: 'Specified id is not valid'})
      return
    }
    Order.find({userId: {$in: mongoose.Types.ObjectId(id)}})
    .populate("events.eventId")
      .then((orders) => res.json(orders))
      
      .catch((e) => console.log(' Error finding orders of that user!', e))
  })


router.post("/order", isAuthenticated, (req, res, next) => {
    console.log(req.body.events)

    const order = {
       userId: req.body.userId,
       events: req.body.events,
    address: [{ 
        name: req.body.address.name,
        street: req.body.address.street,
        zip: req.body.address.zip,
        city: req.body.address.city,
        country: req.body.address.country,
      }],
      totalPrice: req.body.totalPrice
    }
    Order.create(order)
    .then((response) => {
        console.log(response)
        res.json(response)
    })
    .catch(e => console.log(e))
})

module.exports = router


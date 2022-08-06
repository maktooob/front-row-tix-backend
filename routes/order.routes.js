const router = require('express').Router()
const mongoose = require('mongoose')

const { isAuthenticated } = require('../middleware/jwt.middleware')
const Order = require('../models/Order.model')


router.post("/order", (req, res, next) => {
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


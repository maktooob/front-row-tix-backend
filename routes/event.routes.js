const router = require('express').Router()
const mongoose = require('mongoose')
const Event = require('../models/Event.model')
const {events} = require('../models/User.model')

router.get('/events', (req, res, next) => {
  Event.find().then((allEvents) => {
    res.json(allEvents)
  })
})

router.post('/events', (req, res, next) => {
  const {title, description, image, category, price} = req.body
  Event.create({title, description, image, category, price}).then((response) =>
    res.json(response)
  )
})

router.get('/events/:id', (req, res, next) => {
  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({message: 'Specified id is not valid'})
    return
  }
  Events.findById(id)
    .then((event) => res.json(event))
    .catch((e) => console.log(' Can´t find Event by ID', e))
})

router.put('/events/:id', (req, res, next) => {
  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({message: 'Specified id is not valid'})
    return
  }
  const updatedEvent = req.body
  Event.findByIdAndUpdate(id, updatedEvent, { returnDocument: 'after' })
  .then(event => res.json(event))
  .catch(e => console.log("Updating the event failed", e))
})

router.delete('/events/:id', (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    res.status(400).json({message: 'Specified id is not valid'})
    return
  }
  Event.findByIdAndDelete(id)
  .then(() => res.json({ message: `Event with id ${id} has been removed successfully.` }))
  .catch(error => res.status(500).json(error));
})

module.exports = router

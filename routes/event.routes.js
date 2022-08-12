const router = require('express').Router()
const mongoose = require('mongoose')
const { isAdmin } = require('../middleware/isAdmin.middleware')
const { isAuthenticated } = require('../middleware/jwt.middleware')
const Event = require('../models/Event.model')
const {events} = require('../models/User.model')
const fileUploader = require("../config/cloudinary.config")



router.get('/events', (req, res, next) => {
  Event.find()
  .then((allEvents) => {
    res.json(allEvents)
  })
  .catch(e => console.log(e))
})



router.post('/events', isAdmin, (req, res, next) => {
  const {title, description, image, category, location, date, price} = req.body
  Event.create({title, description, image, category, location, date, price})
  .then((response) =>
    res.json(response))
    .catch(e => console.log(e))
})

router.post("/upload",  fileUploader.single("image"), (req, res, next) => {
  if(Object.keys(req).includes("file")) res.json({ fileUrl: req.file.path })
  else { res.json({ fileUrl: "https://i.stack.imgur.com/34AD2.jpg"})}
})

router.get('/events/:id', (req, res, next) => {
  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({message: 'Specified id is not valid'})
    return
  }
  Event.findById(id)
    .then((event) => res.json(event))
    .catch((e) => console.log(' Can´t find Event by ID', e))
})
router.get('/events/edit/:id', isAdmin,  (req, res, next) => {

})

router.put('/events/:id', isAdmin, (req, res, next) => {
  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({message: 'Specified id is not valid'})
    return
  }
  const updatedEvent = req.body
  Event.findByIdAndUpdate(id, updatedEvent, { returnDocument: 'after' })
  .then(event => res.json(event))
  .catch(e => console.log("Updating the event failed", e))
})

router.delete('/events/:id', isAdmin, (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({message: 'Specified id is not valid'})
    return
  }
  Event.findByIdAndDelete(id)
  .then(() => res.json({ message: `Event with id ${id} has been removed successfully.` }))
  .catch(error => res.status(500).json(error));
})

module.exports = router

const express = require('express')

const router = express.Router()

const {getAllPeople, createPerson, getPersonById, deletePerson, updatePerson} = require('./controllers/peopleController')

// create person
router.post('/createPerson',createPerson)

// get all people
router.get('/people',getAllPeople)

// get person by id
router.get('/people/:id',getPersonById)

// delete person by id
router.delete('/people/:id',deletePerson)

// update person by id
router.patch('/people/:id',updatePerson)

const {getAllEvents, createEvent, getEventById,deleteEvent,updateEvent} = require('./controllers/eventController')

// create event
router.post('/createEvent', createEvent)

// get all events
router.get('/events', getAllEvents)

// get event by id
router.get('/events/:id', getEventById)

// delete event by id
router.delete('/event/:id', deleteEvent)

// update event by id
router.patch('/event/:id', updateEvent)

module.exports = router;
const express = require('express');
const router = express.Router();

const eventServices = require('../services/event.services')
const Auth = require('../middleware/auth')

router.post('/create-event', Auth, async (req, res) => {
    const event = await eventServices.createEvent(req.body, req.user.id)
    res.send(event)
});

router.get('/allevents', Auth, async (req, res) => {
    const event = await eventServices.getAllEvents()
    res.send(event)
});

router.get('/one-event/:eventId', Auth, async (req, res) => {
    const event = await eventServices.getEvent(req.params.eventId)
    res.send(event)
});

router.patch('/update-event/:eventId', Auth, async (req, res) => {
    const event = await eventServices.updateEvent(req.params.eventId, req.body)
    res.send(event)
});

router.delete('/delete-event/:eventId', Auth, async (req, res) => {
    const event = await eventServices.deleteEvent(req.params.eventId)
    res.send("This event has been deleted")
});

module.exports = router;
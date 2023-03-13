const express = require('express');
const router = express.Router();

const attendeeServices = require('../services/attendee.services')
const Auth = require('../middleware/auth')

router.post('/new-attendee', Auth, async(req, res) => {
    const attendee = await attendeeServices.addAttendee(req.body)
    res.send(attendee)
});

router.get('/all-attendees', Auth, async (req, res) => {
    const attendee = await attendeeServices.getAllAttendees()
    res.send(attendee)
});

router.get('/attendee/:attendeeId', Auth, async (req, res) => {
    const attendee = await attendeeServices.getAttendee(req.params.attendeeId)
    res.send(attendee)
});

router.patch('/edit-attendee/:attendeeId', Auth, async (req, res) => {
    const attendee = await attendeeServices.updateAttendee(req.params.attendeeId)
    res.send(attendee)
});

router.delete('/delete-attendee/:attendeeId', Auth, async (req, res) => {
    const attendee = await attendeeServices.deleteAttendee(re.params.attendeeId)
    res.send("This attendee has been deleted")
});

module.exports = router;
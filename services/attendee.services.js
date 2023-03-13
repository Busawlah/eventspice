const Attendee = require("../models/attendee.model");

const addAttendee = async(data) => {
    const attendee = await Attendee.create({
        ...data
    })
    return attendee
}

const getAllAttendees = async() => {
    const attendee = await Attendee.find()
    return attendee
}

const getAttendee = async(attendeeId) => {
    const attendee = await Attendee.findById(attendeeId)
    return attendee
}

const updateAttendee = async(attendeeid, updateBody) => {
    const attendee = await Attendee.findByIdAndUpdate(attendeeId, {...updateBody}, {new: true})
    return attendee
}

const deleteAttendee = async(attendeeId) => {
    const attendee = await Attendee.findByIdAndDelete(attendeeId)
    return attendee
}

module.exports = {
    addAttendee,
    getAllAttendees,
    getAttendee,
    updateAttendee,
    deleteAttendee
}
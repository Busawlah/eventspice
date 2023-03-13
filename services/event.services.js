const Event = require("../models/event.model");

const createEvent = async(data, userId) => {
    const event = await Event.create({
        ...data, user: userId
    })
    return event
}

const getAllEvents =  async() => {
    const event = await Event.find()
    return event
}

const getEvent = async(eventId) => {
    const event = await Event.findById(eventId)
    return event
}

const updateEvent = async(eventId, updateBody) => {
    const event = await Event.findByIdAndUpdate(eventId, {...updateBody}, {new: true})
    return event
}

const deleteEvent = async(eventId) => {
    const event = await Event.findByIdAndDelete(eventId)
    return event
}

module.exports = {
    createEvent,
    deleteEvent,
    updateEvent,
    getAllEvents,
    getEvent
}
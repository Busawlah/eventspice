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

// const getEventWithCountOfAttendees = async () => {
//     return await  Event.aggregate([
//         { $lookup: { from: 'attendees', localField: 'attendees', foreignField: '_id', as: 'attendeeDetails' } },
//         { $unwind: '$attendeeDetails' },
//         { $group: { _id: '$_id', title: { $first: '$title' }, date: { $first: '$date' }, location: { $first: '$location' }, attendeesCount: { $sum: 1 } } },
//     ]);
// };

// const getUserEventWithAttendee = async (userId) => {
//     return await Event.find({ organizer: userId }).populate({ path: 'attendees', select: '-events' })
// }

module.exports = {
    createEvent,
    deleteEvent,
    updateEvent,
    getAllEvents,
    getEvent
}
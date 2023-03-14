const Attendee = require("../models/attendee.model");

const addAttendee = async(data) => {
    const attendee = await Attendee.create({
        ...data
    })
    let mailoptions = {
        from: 'eventspice@gmail.com', // sender address
        to: data.email, // list of receivers
        subject: "Invite for an upcoming event", // Subject line
        text: "Hi, You are on the guest list for a forthcoming event. The organizer wants you to grace the occasion with your presence and make a positive impact.", // plain text body`
      };
    await emailer(mailoptions)
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
    let mailoptions = {
        from: 'eventspice@gmail.com', // sender address
        to: data.email, // list of receivers
        subject: "Invite Withdrawal", // Subject line
        text: "Hi, You have been removed from the guest list for a forthcoming event. We are sorry for getting your hopes high about gracing the occasion, we hope to have you on the guest list for some other events.", // plain text body`
      };
    await emailer(mailoptions)
    return attendee
}

module.exports = {
    addAttendee,
    getAllAttendees,
    getAttendee,
    updateAttendee,
    deleteAttendee
}
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    description: { type: String },
    location: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendee'
    }]
},
{
    timestamps: true
}
);

const Event = mongoose.model('events', eventSchema);

module.exports = Event;
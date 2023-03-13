const mongoose = require('mongoose');
const validator = require('validator');

const attendeeSchema = new mongoose.Schema({
    name: { type:String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true, validate(value) {
        if(!validator.isEmail(value)) {
            throw new Error('Invalid Email')
        }
    } },
    phonenumber: {  type: String, required: true, },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
},
{
    timestamps: true
}
);

const Attendee = mongoose.model('attendee', attendeeSchema);

module.exports = Attendee;
const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    assignedTo:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Person',
    }],   
})

module.exports = mongoose.model("Events",EventSchema)

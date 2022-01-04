const mongoose = require('mongoose')

const PeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Events',
    }]  
})

module.exports = mongoose.model("Person",PeopleSchema)

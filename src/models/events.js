const mongoose = require('mongoose') ;
const User = require('./users')

const eventSchema = new mongoose.Schema({
    uid :{
        type:mongoose.Schema.ObjectId,
        ref:User,
        index:true,
        required:true
    },
    eventName:String,
    occurrence:{
        type:String,
        enum:['WEEKLY','MONTHLY','YEARLY','ONETIME'],
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:Date

})

const Event = mongoose.model('Event',eventSchema);

module.exports = Event;
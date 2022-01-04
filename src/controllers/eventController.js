const Events = require('../models/events.models')
const People = require('../models/people.models')

exports.getAllEvents = (req,res)=>{
    Events.find().exec((err, events)=>{
        if(err || !events){
            return res.status(400).json({err:"warn"})
        }
        res.json({events: events})
    })
}

exports.getEventById = async (req,res)=>{
    try {
        const event = await Events.findById(req.params.id)
        if(!event){
            throw Error("id not found")
        }
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json(error)
    } 
}

exports.createEvent = async (req,res)=>{  
    const event = new Events(req.body)
    
    event.save((err,event)=>{
        if(err || !event){
            return res.status(400).json({err:"error in create event"})
        }        
        res.json({event: event})
    })
    
    if(req.body._id===null){
        delete req.body._id
    }
    
    const idEvent = req.body // 
    const {assignedTo,name, price} = req.body // position array ,event name, price 
    console.log(assignedTo,price, name, idEvent)

/*
    for(let person of assignedTo){
        console.log(person)
        const newPerson = await People.findByIdAndUpdate(person,event.id)
    }
  * */  
}

exports.deleteEvent = async (req,res) =>{
    try {
        const event = await Events.findByIdAndDelete(req.params.id)
        if(!event){
            throw Error("id not found")
        }
        res.status(200).json({success: true})
    } catch (error) {
        res.status(400).json({message: error})
    } 
}

exports.updateEvent = async (req,res)=>{
    try {
        const event = await Events.findByIdAndUpdate(req.params.id, req.body)
        if(!event){
            throw Error("id not found")
        }
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json(error)
    } 
}

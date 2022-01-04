const People = require('../models/people.models')
const Events = require('../models/events.models')

exports.getAllPeople = (req,res)=>{
    People.find().exec((err, people)=>{
        if(err || !people){
            return res.status(400).json({err:"warn"})
        }
        res.json({people})
    })
}

exports.getPersonById = async (req,res)=>{
    try {
        const person = await People.findById(req.params.id)
        if(!person){
            throw Error("people id not found")
        }
        res.status(200).json({person})
    } catch (error) {
        res.status(400).json(error)
    } 
}

exports.createPerson = (req,res)=>{
    const people = new People(req.body)
    people.save((err,people)=>{
        if(err || !people){
            return res.status(400).json({err:"error in create people"})
        }
        res.json({people})
    })
}

exports.deletePerson = async (req,res) =>{
    try {
        const person = await People.findByIdAndDelete(req.params.id)
        if(!person){
            throw Error("id not found")
        }
        res.status(200).json({success: true})
    } catch (error) {
        res.status(400).json({message: error})
    } 
}

exports.updatePerson = async (req,res)=>{
    const {id} = req.params

    try {
        const person = await People.findByIdAndUpdate(id, req.body)
        if(!person){
            throw Error("id not found")
        }
        res.status(200).json({person})
    } catch (error) {
        res.status(400).json(error)
    } 
}
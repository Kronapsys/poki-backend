const classroom = require('../models/Classroom');

const controller = { 
    create: async (req, res) => {
        try{
            const item = await classroom.create(req.body)
            res.send(item)
        }catch(err){
            res.status(400).send(err)
        }
    },
    
    read: async (req, res) => {
        try{
            const items = await classroom.find({}).populate(['courses'])
            res.send(items)
        }catch(err){
            res.status(400).send(err)
        }
    },

    readById: async (req, res) => {
        try{
            const item = await classroom.findById(req.params.id).populate(['courses'])
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await classroom.findByIdAndUpdate(req.params.id, req.body, {new: true}) // {new: true} -> Trae el objeto ya actualizado
            .populate(['courses']) 
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await classroom.findByIdAndDelete(req.params.id)
            return !item ? res.sendStatus(404) : res.sendStatus(200);
        }catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = controller;
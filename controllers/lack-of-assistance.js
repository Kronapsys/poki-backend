const lack_of_assistance = require('../models/LackOfAssistance');

const controller = { 
    create: async (req, res) => {
        try{
            const item = await lack_of_assistance.create(req.body)
            res.send(item)
        }catch(err){
            res.status(400).send(err)
        }
    },

    read: async (req, res) => {
        try{
            const items = await lack_of_assistance.find({}).populate(['lacks-of-assistance-type'])
            res.send(items)
        }catch(err){
            res.status(400).send(err)
        }
    },

    readById: async (req, res) => {
        try{
            const item = await lack_of_assistance.findById(req.params.id).populate(['lacks-of-assistance-type'])
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await lack_of_assistance.findByIdAndUpdate(req.params.id, req.body, {new: true}) // {new: true} -> Trae el objeto ya actualizado
            .populate(['lacks-of-assistance-type']) 
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await lack_of_assistance.findByIdAndDelete(req.params.id)
            return !item ? res.sendStatus(404) : res.sendStatus(200);
        }catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = controller;
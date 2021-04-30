const medicine = require('../models/Medicine');

const controller = { 
    create: async (req, res) => {
        try{
            const item = await medicine.create(req.body)
            res.send(item)
        }catch(err){
            res.status(400).send(err)
        }
    },
        
    read: async (req, res) => {
        try{
            const items = await medicine.find({}).populate(['medicines-type'])
            res.send(items)
        }catch(err){
            res.status(400).send(err)
        }
    },

    readById: async (req, res) => {
        try{
            const item = await medicine.findById(req.params.id).populate(['medicines-type'])
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await medicine.findByIdAndUpdate(req.params.id, req.body, {new: true}) // {new: true} -> Trae el objeto ya actualizado
            .populate(['medicines-type']) 
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await medicine.findByIdAndDelete(req.params.id)
            return !item ? res.sendStatus(404) : res.sendStatus(200);
        }catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = controller;
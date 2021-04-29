const allergy = require('../models/Allergy');

const controller = { 
    create: async (req, res) => {
        try{
            const item = await allergy.create(req.body)
            res.send(item)
        }catch(err){
            res.status(400).send(err)
        }
    },

    read: async (req, res) => {
        try{
            const items = await allergy.find({}).populate(['allergies-type'])
            res.send(items)
        }catch(err){
            res.status(400).send(err)
        }
    },

    readById: async (req, res) => {
        try{
            const item = await allergy.findById(req.params.id).populate(['allergies-type'])
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await allergy.findByIdAndUpdate(req.params.id, req.body, {new: true}) // {new: true} -> Trae el objeto ya actualizado
            .populate(['allergies-type']) 
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await allergy.findByIdAndDelete(req.params.id)
            return !item ? res.sendStatus(404) : res.sendStatus(200);
        }catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = controller;
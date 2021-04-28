const lack_of_assistance_type = require('../models/LackOfAssistanceType');

const controller = { 
    create: async (req, res) => {
        try{
            const item = await lack_of_assistance_type.create(req.body)
            res.send(item)
        }catch(err){
            res.status(400).send(err)
        }
    },
        
    read: async (req, res) => {
        try{
            const items = await lack_of_assistance_type.find({}).populate(['childs'])
            res.send(items)
        }catch(err){
            res.status(400).send(err)
        }
    },

    readById: async (req, res) => {
        try{
            const item = await lack_of_assistance_type.findById(req.params.id).populate(['childs'])
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await lack_of_assistance_type.findByIdAndUpdate(req.params.id, req.body, {new: true}) // {new: true} -> Trae el objeto ya actualizado
            .populate(['childs']) 
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await lack_of_assistance_type.findByIdAndDelete(req.params.id)
            return !item ? res.sendStatus(404) : res.sendStatus(200);
        }catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = controller;
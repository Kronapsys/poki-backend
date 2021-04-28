const parent = require('../models/Parent');

const controller = { 
    create: async (req, res) => {
        try{
            const item = await parent.create(req.body)
            res.send(item)
        }catch(err){
            res.status(400).send(err)
        }
    },
        // Ejemplo populate anidado: .populate({path:'childs', populate:{path:'parents'}})
    read: async (req, res) => {
        try{
            const items = await parent.find({}).populate(['childs'])
            res.send(items)
        }catch(err){
            res.status(400).send(err)
        }
    },

    readById: async (req, res) => {
        try{
            const item = await parent.findById(req.params.id).populate(['childs'])
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await parent.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate(['childs']) // {new: true} -> Trae el objeto ya actualizado
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await parent.findByIdAndDelete(req.params.id)
            return !item ? res.sendStatus(404) : res.sendStatus(200);
        }catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = controller;
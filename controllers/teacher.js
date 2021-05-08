const teacher = require('../models/Teacher');
const bcrypt = require('bcrypt');

const controller = { 
    create: async (req, res) => {
        try{
            const pass = req.body.password;
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const item = await teacher.create(req.body)
            res.send(item)
        }catch(err){
            res.status(400).send(err)
        }
    },

    read: async (req, res) => {
        try{
            const items = await teacher.find({})  
            res.send(items)
        }catch(err){
            res.status(400).send(err)
        }
    },

    readById: async (req, res) => {
        try{
            const item = await teacher.findById(req.params.id)  
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await teacher.findByIdAndUpdate(req.params.id, req.body, {new: true}) // {new: true} -> Trae el objeto ya actualizado
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await teacher.findByIdAndDelete(req.params.id)
            return !item ? res.sendStatus(404) : res.sendStatus(200);
        }catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = controller;
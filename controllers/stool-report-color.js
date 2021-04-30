const stool_report_color = require('../models/StoolReportColor');

const controller = { 
    create: async (req, res) => {
        try{
            const item = await stool_report_color.create(req.body)
            res.send(item)
        }catch(err){
            res.status(400).send(err)
        }
    },
        
    read: async (req, res) => {
        try{
            const items = await stool_report_color.find({})
            res.send(items)
        }catch(err){
            res.status(400).send(err)
        }
    },

    readById: async (req, res) => {
        try{
            const item = await stool_report_color.findById(req.params.id)
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await stool_report_color.findByIdAndUpdate(req.params.id, req.body, {new: true}) // {new: true} -> Trae el objeto ya actualizado 
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await stool_report_color.findByIdAndDelete(req.params.id)
            return !item ? res.sendStatus(404) : res.sendStatus(200);
        }catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = controller;
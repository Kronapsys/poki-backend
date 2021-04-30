const stool_report_type = require('../models/StoolReportType');

const controller = { 
    create: async (req, res) => {
        try{
            const item = await stool_report_type.create(req.body)
            res.send(item)
        }catch(err){
            res.status(400).send(err)
        }
    },
        
    read: async (req, res) => {
        try{
            const items = await stool_report_type.find({})
            res.send(items)
        }catch(err){
            res.status(400).send(err)
        }
    },

    readById: async (req, res) => {
        try{
            const item = await stool_report_type.findById(req.params.id)
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await stool_report_type.findByIdAndUpdate(req.params.id, req.body, {new: true}) // {new: true} -> Trae el objeto ya actualizado 
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await stool_report_type.findByIdAndDelete(req.params.id)
            return !item ? res.sendStatus(404) : res.sendStatus(200);
        }catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = controller;
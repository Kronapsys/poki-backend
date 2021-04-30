const stool_report = require('../models/StoolReport');

const controller = { 
    create: async (req, res) => {
        try{
            const item = await stool_report.create(req.body)
            res.send(item)
        }catch(err){
            res.status(400).send(err)
        }
    },
        
    read: async (req, res) => {
        try{
            const items = await stool_report.find({}).populate(['stool-report-type', 'stool-report-color'])
            res.send(items)
        }catch(err){
            res.status(400).send(err)
        }
    },

    readById: async (req, res) => {
        try{
            const item = await stool_report.findById(req.params.id).populate(['stool-report-type', 'stool-report-color'])
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    updateById: async (req, res) => {
        try{
            const item = await stool_report.findByIdAndUpdate(req.params.id, req.body, {new: true}) // {new: true} -> Trae el objeto ya actualizado
            .populate(['stool-report-type', 'stool-report-color']) 
            return !item ? res.sendStatus(404) : res.send(item);
        }catch(err){
            res.status(400).send(err)
        }
    },

    deleteById: async (req, res) => {
        try{
            const item = await stool_report.findByIdAndDelete(req.params.id)
            return !item ? res.sendStatus(404) : res.sendStatus(200);
        }catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = controller;
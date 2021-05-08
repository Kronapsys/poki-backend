const bcrypt = require('bcrypt');
const jwt =  require ('jsonwebtoken');

const Parent = require('../models/Parent');
const Teacher = require('../models/Teacher');
// import TokenModel from "../models/tokenDTO.js";

const AuthController = {
   
    loginP: async (req, res) => {
        try {
            const user = await Parent.findOne({email: req.body.email});
            if (!user) {
                return res.status(404).send({
                    message: "EL EMAIL NO EXISTE EN NUESTRA BASE DE DATOS",
                });
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: "LAS CONTRASEÑAS NO COINCIDEN",
                });
            }
            const token = jwt.sign({_id: user._id,}, "secreto");
            await Parent.findByIdAndUpdate({_id: user._id}, {
                $push: {tokens: token},
            });
            res.send({
                usuario: user,
                token: token,
            });
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO LOGEAR",
                error: err,
            });
        }
    },

    loginT: async (req, res) => {
        try {
            const user = await Teacher.findOne({email: req.body.email});
            if (!user) {
                return res.status(404).send({
                    message: "EL EMAIL NO EXISTE EN NUESTRA BASE DE DATOS",
                });
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: "LAS CONTRASEÑAS NO COINCIDEN",
                });
            }
            const token = jwt.sign({_id: user._id,}, "secreto");
            await Teacher.findByIdAndUpdate({_id: user._id}, {
                $push: {tokens: token},
            });
            res.send({
                usuario: user,
                token: token,
            });
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO LOGEAR",
                error: err,
            });
        }
    },

    async logoutP(req, res) {
        try {
            await Parent.findByIdAndUpdate(req.user._id, {
                $pull: {tokens: req.headers.authorization,},
            });
            res.status(200).send({
                message: "EL USUARIO SE HA DESCONECTADO CORRECTAMENTE",
            });
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO DESCONECTAR",
                error: err,
            });
        }
    },

    async logoutT(req, res) {
        try {
            await Teacher.findByIdAndUpdate(req.user._id, {
                $pull: {tokens: req.headers.authorization,},
            });
            res.status(200).send({
                message: "EL USUARIO SE HA DESCONECTADO CORRECTAMENTE",
            });
        } catch (err) {
            res.status(500).send({
                message: "EL USUARIO NO SE HA PODIDO DESCONECTAR",
                error: err,
            });
        }
    },
    
};



module.exports = AuthController;
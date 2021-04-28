const express = require('express');

const endpointConfig = (app, url, callback) => {
    app.use(url, callback(express)) // Configuración del endpoint(url) con el controlador(callback) en el servidor (app.use)
}

module.exports = endpointConfig;
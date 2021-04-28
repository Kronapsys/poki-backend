require('./config/dbconnect');
const express = require('express');
const morgan = require('morgan');
const app = express(); // Creamos el server

const routerConfig = require('./utils/routerConfig');
const routes = require('./routes/routes');

app.use(morgan('dev')); // Utilizamos el middleware de morgan (nos trae información de las peticiones)
app.use(express.json()); // Fuerza que todo sea tipo json

routerConfig(app, '/parents', routes.parentRoutes);
routerConfig(app, '/teachers', routes.teacherRoutes);

const port = 3000;
app.listen(port, ()=> {
    console.log('Server listen on port: ' + `${port}`)
});
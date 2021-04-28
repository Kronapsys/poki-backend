require('./config/dbconnect');
const express = require('express');
const morgan = require('morgan');
const app = express(); // Creamos el server

const routerConfig = require('./utils/routerConfig');
const routes = require('./routes/routes'); // Aquí importamos el fichero de routes.js así tenemos todas las rutas con un único import

app.use(morgan('dev')); // Utilizamos el middleware de morgan (nos trae información de las peticiones)
app.use(express.json()); // Fuerza que todo sea tipo json

// Indicamos en que endpoint se ejecutará los métodos del router
routerConfig(app, '/parents', routes.parentRoutes);
routerConfig(app, '/teachers', routes.teacherRoutes);
routerConfig(app, '/childs', routes.childRoutes);
routerConfig(app, '/lacks-of-assistance', routes.lack_of_assistanceRouter);

const port = 3000;
app.listen(port, ()=> {
    console.log('Server listen on port: ' + `${port}`)
});
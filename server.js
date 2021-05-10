require('./config/dbconnect');
const express = require('express');
const morgan = require('morgan');
const app = express(); // Creamos el server

const routerConfig = require('./utils/routerConfig');
const routes = require('./routes/routes'); // Aquí importamos el fichero de routes.js así tenemos todas las rutas con un único import
// const cors = require('./middlewares/cors');
const cors = require('cors');

app.use(morgan('dev')); // Utilizamos el middleware de morgan (nos trae información de las peticiones)
app.use(express.json()); // Fuerza que todo sea tipo json
app.use(cors()); // Utilizamos las políticas de cors

// Indicamos en que endpoint se ejecutará los métodos del router
routerConfig(app, '/parents', routes.parentRoutes);
routerConfig(app, '/teachers', routes.teacherRoutes);
routerConfig(app, '/childs', routes.childRoutes);
routerConfig(app, '/lacks-of-assistance', routes.lack_of_assistanceRoutes);
routerConfig(app, '/lacks-of-assistance-type', routes.lack_of_assistance_typeRoutes);
routerConfig(app, '/allergies', routes.allergyRoutes);
routerConfig(app, '/allergies-type', routes.allergy_typeRoutes);
routerConfig(app, '/classrooms', routes.classroomRoutes);
routerConfig(app, '/courses', routes.courseRoutes);
routerConfig(app, '/events', routes.eventRoutes);
routerConfig(app, '/food-reports', routes.food_reportRoutes);
routerConfig(app, '/food-reports-type', routes.food_report_typeRoutes);
routerConfig(app, '/incidents-report', routes.incident_reportRoutes);
routerConfig(app, '/incidents-report-type', routes.incident_report_typeRoutes);
routerConfig(app, '/medicines', routes.medicineRoutes);
routerConfig(app, '/medicines-type', routes.medicine_typeRoutes);
routerConfig(app, '/stools-report', routes.stool_reportRoutes);
routerConfig(app, '/stools-report-type', routes.stool_report_typeRoutes);
routerConfig(app, '/stools-report-color', routes.stool_report_colorRoutes);
routerConfig(app, '/tutorials', routes.tutorialRoutes);
routerConfig(app, '/notifications', routes.notificationRoutes);
routerConfig(app, '/auths', routes.authRoutes);


const port = 3000;
app.listen(port, ()=> {
    console.log('Server listen on port: ' + `${port}`)
});
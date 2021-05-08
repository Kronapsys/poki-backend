const parentRoutes = require('./parents');
const teacherRoutes = require('./teachers');
const childRoutes = require('./childs');
const lack_of_assistanceRoutes = require('./lacks-of-assistance');
const lack_of_assistance_typeRoutes = require('./lacks-of-assistance-type');
const allergyRoutes = require('./allergies');
const allergy_typeRoutes = require('./allergies-type');
const classroomRoutes = require('./classrooms');
const courseRoutes = require('./courses');
const eventRoutes = require('./events');
const food_reportRoutes = require('./food-reports');
const food_report_typeRoutes = require('./food-reports-type');
const incident_reportRoutes = require('./incidents-report');
const incident_report_typeRoutes = require('./incidents-report-type');
const medicineRoutes = require('./medicines');
const medicine_typeRoutes = require('./medicines-type');
const stool_reportRoutes = require('./stools-report');
const stool_report_typeRoutes = require('./stools-report-type');
const stool_report_colorRoutes = require('./stools-report-color');
const tutorialRoutes = require('./tutorials');
const notificationRoutes = require('./notifications');
const authRoutes = require('./auths');


module.exports = {parentRoutes, teacherRoutes, childRoutes, lack_of_assistanceRoutes,
                  lack_of_assistance_typeRoutes, allergyRoutes, allergy_typeRoutes,
                  classroomRoutes, courseRoutes, eventRoutes, food_reportRoutes,
                  food_report_typeRoutes, incident_reportRoutes, incident_report_typeRoutes,
                  medicineRoutes, medicine_typeRoutes, stool_reportRoutes, stool_report_typeRoutes,
                  stool_report_colorRoutes, tutorialRoutes, notificationRoutes, authRoutes
                };
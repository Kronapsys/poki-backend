const parentRoutes = require('./parents');
const teacherRoutes = require('./teachers');
const childRoutes = require('./childs');
const lack_of_assistanceRoutes = require('./lacks-of-assistance');
const lack_of_assistance_typeRoutes = require('./lacks-of-assistance-type');
const allergyRoutes = require('./allergies');
const allergy_typeRoutes = require('./allergies-type');

module.exports = {parentRoutes, teacherRoutes, childRoutes, lack_of_assistanceRoutes,
                  lack_of_assistance_typeRoutes, allergyRoutes, allergy_typeRoutes};
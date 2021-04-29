const parentRoutes = require('./parents');
const teacherRoutes = require('./teachers');
const childRoutes = require('./childs');
const lack_of_assistanceRoutes = require('./lacks-of-assistance');
const lack_of_assistance_typeRoutes = require('./lacks-of-assistance-type');

module.exports = {parentRoutes, teacherRoutes, childRoutes, lack_of_assistanceRoutes,
                  lack_of_assistance_typeRoutes};
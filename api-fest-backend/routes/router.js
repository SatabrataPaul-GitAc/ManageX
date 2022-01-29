const router = require('express').Router();
const loginUser = require('../controllers/loginUser.js');
const logoutUser = require('../controllers/logoutUser');
const createUser = require('../controllers/createUser.js');
const getEmployee = require('../controllers/getEmployee');
const getEmployeeById = require('../controllers/getEmployeeById');
const addEmployee = require('../controllers/addEmployee');
const updateEmployee = require('../controllers/updateEmployee');
const delEmployee = require('../controllers/delEmployee');

router.post('/loginUser', loginUser);
router.post('/logoutUser', logoutUser);
router.post('/createUser', createUser);
router.get('/getEmployees', getEmployee);
router.get('/getEmployeeById', getEmployeeById);
router.post('/addEmployee', addEmployee);
router.put('/updateEmployee', updateEmployee);
router.delete('/delEmployee', delEmployee);

module.exports = router;
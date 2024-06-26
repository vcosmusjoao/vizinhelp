
const extractToken = require('../middlewares/extractToken');
const keycloak = require("#middlewares/keycloak");

const router = require('express-promise-router')();

const userController = require('../controllers/user.controller');



router.get('/user-info',[keycloak.protect(), extractToken], userController.getUserInfo);


module.exports = router;
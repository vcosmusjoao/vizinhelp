const extractToken = require('../middlewares/extractToken');
const keycloak = require("#middlewares/keycloak");
const checkIfAdmin = require("#middlewares/checkIfAdmin");
const router = require('express-promise-router')();
const offerController = require('../controllers/offer.controller');

// Endpoint para criar uma nova oferta
router.post('/offers',[keycloak.protect(), extractToken], offerController.createOffer);

module.exports = router;
const indexController = require('../controllers/index.controller');
const clubController = require('../controllers/club.controller');
const playerController = require('../controllers/player.controller');

const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);
router.get('/clubs', clubController.index);
router.get('/clubs/create', clubController.create);
router.post('/clubs/store', clubController.store);
router.get('/clubs/delete/:id', clubController.delete);
router.get('/clubs/edit/:id', clubController.change);
router.post('/clubs/edit', clubController.edit);

router.get('/players', playerController.index);
router.get('/players/create', playerController.create);
router.post('/players/store', playerController.store);
router.get('/players/delete/:id', playerController.delete);
router.get('/players/edit/:id', playerController.change);
router.post('/players/edit', playerController.edit);

module.exports = router;

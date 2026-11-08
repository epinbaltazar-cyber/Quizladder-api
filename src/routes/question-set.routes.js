'use strict';

const express = require('express');
const router = express.Router();
const questionSetController = require('../controllers/question-set.controller');

router.get('/', questionSetController.list);
router.get('/:id', questionSetController.get);
router.post('/', questionSetController.create);
router.put('/:id', questionSetController.update);
router.delete('/:id', questionSetController.remove);

module.exports = router;
'use strict';

var express = require('express');
var controller = require('./thing.controller');
import * as auth from '../../auth/auth.service';
var router = express.Router();

// router.get('/', controller.index);
// router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.upsert);
// router.patch('/:id', controller.patch);
// router.delete('/:id', controller.destroy);

router.get('/search/:query', controller.search);
router.get('/going/:barId', auth.isAuthenticated(), controller.going);

module.exports = router;

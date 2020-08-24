'use strict'

const express = require('express');
const router = express.Router();
const prodactsCtrl = require('../controllers/prodactsCtrl');
const commonCtrl = require('../controllers/commonCtrl');



function isAdmin(req, res, next) {
    if(true){
        console.log('Only Admin');
        next();
    }
    else {
        next(err);
    }
}



router.get('/prodacts', prodactsCtrl.getProdacts, commonCtrl.responseToJSON('prodacts'));
router.post('/prodacts', prodactsCtrl.createProdacts, commonCtrl.responseToJSON('prodacts'));



module.exports = router;

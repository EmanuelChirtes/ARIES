'use strict'
const Prodacts = require('../models/prodactsModel');

module.exports = {
    getProdacts,
    createProdacts,
};



function getProdacts(req, res, next) {
    Prodacts.find(function (err, result) {
        if (err) {
            console.log('err', err);
            return res.send('Error during get Prodacts')
        }

        req.resources.Prodacts = result;
        next()
    })
}


function createProdacts(req, res, next) {
    const prodacts = new Prodacts(req.body);

    prodacts.save(function (err, result) {
        if (err) {
            return next(err)
        }
        req.resources.Prodacts = result;
        return next()
    });
}

function midd42(req, res, next) {
    console.log('midd 42');
    next()

}


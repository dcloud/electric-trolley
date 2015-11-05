'use strict';

const express = require('express');
const request = require('request');
let router = express.Router();

const baseURL = 'http://bloomington.doublemap.com/map/v2/'
const apiEndpoints = ['routes', 'buses', 'stops'];

router.param('endpoint', function (req, res, next, endpoint) {
    if (apiEndpoints.indexOf(endpoint) < 0) {
        res.sendStatus(404);
    }
    req.endpoint = endpoint;
    next();
})

router.get('/:endpoint', function (req, res) {
    request.get(baseURL + req.endpoint).pipe(res);
});


router.get('/', function (req, res) {
    res.json({ endpoints: apiEndpoints});
});


module.exports = router;

'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataDir = path.join(__dirname, '..', 'data');

const fileNames = ['agency', 'calendar', 'calendar_dates',
                            'routes', 'shapes', 'stop_times', 'stops', 'trips'];

router.param(['endpoint'], function (req, res, next, endpoint) {
    req.endpoint = (fileNames.indexOf(endpoint) !== -1) ? endpoint : null;
    console.log(req.endpoint);
    next();
})

/* Make JSON routes for fileNames. */
router.get('/:endpoint', function(req, res, next) {
    if (req.endpoint) {
        let fileName = req.endpoint + '.json';
        let filePath = path.join(dataDir, fileName);
        console.log(filePath);
        fs.stat(filePath, function (err, stats) {
            if (stats.isFile()) {
                fs.readFile(filePath, function (err, data) {
                    res.set('Content-Type', 'application/json');
                    res.send(data);
                })
            } else {
                res.sendStatus(404).end();
            }
        });
    } else {
        res.status(404).json({'error': 'Endpoint not found!'});
    }
});

router.get('/', function (req, res, next) {
    let endpoints = fileNames.map(f => `/api/${f}`)
    res.send({
        'endpoints': endpoints
    });
});

module.exports = router;

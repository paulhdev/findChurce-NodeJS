const express = require('express');

const routes = express.Router();

const ChurceController = require('./app/controllers/ChurceController');

routes.get('/v1/churces', ChurceController.index);
routes.get('/v1/churces/:name', ChurceController.show);
routes.post('/v1/churces', ChurceController.create);
routes.put('/v1/churces/:id', ChurceController.update);

module.exports = routes;

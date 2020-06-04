import express from 'express';
import knex from './database/connection'

const routes = express.Router();

import PointsController from './controllers/PointController'
const pointsController = new PointsController();

import ItemsController from './controllers/ItemsController'
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes;

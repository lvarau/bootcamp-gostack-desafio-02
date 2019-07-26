import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/** Route to create user */
routes.post('/users', UserController.store);

/** Authentication Route */
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

/** Update for authenticated users */
routes.put('/users', UserController.update);

export default routes;

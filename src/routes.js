import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();
/**
 * Testing route;
 * Creating an user;
 * Saving in database;
 */
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Leonardo',
    email: 'leonardo@leonardo.com',
    password_hash: '123456789'
  });
  return res.json(user);
});

export default routes;

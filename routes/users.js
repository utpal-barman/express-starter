import express from 'express';

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  patchUser,
} from '../controllers/UsersController.js';

const router = express.Router();

router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);

export default router;

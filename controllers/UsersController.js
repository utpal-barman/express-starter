import { v4 as uuidv4 } from 'uuid';
import User from '../models/user.js';

uuidv4();

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ message: 'Cannot find subscriber' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  console.log('post on user');

  const userWithId = { ...user, user_id: uuidv4() };

  try {
    const newUser = await User(userWithId).save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const patchUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (req.body.name != null) {
    user.name = req.body.name;
  }
  if (req.body.profession != null) {
    user.profession = req.body.profession;
  }
  if (req.body.location != null) {
    user.location = req.body.location;
  }

  try {
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ message: 'Cannot find subscriber' });
    }
    user.delete();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

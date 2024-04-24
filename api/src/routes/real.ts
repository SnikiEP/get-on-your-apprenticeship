import express from 'express';
import axios from 'axios';

const realRouter = express.Router();

realRouter.get('/students', async function (req, res, next) {
  try {
    const response = await axios.get('https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters');
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

realRouter.get('/randomstudent', async function (req, res, next) {
  try {
    const response = await axios.get('https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters');
    const students = response.data;
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    res.json(randomStudent);
  } catch (error) {
    next(error);
  }
});

export default realRouter;

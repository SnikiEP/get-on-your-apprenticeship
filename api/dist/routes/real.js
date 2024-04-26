"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const realRouter = express_1.default.Router();
realRouter.get('/students', async function (req, res, next) {
    try {
        const response = await axios_1.default.get('https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters');
        res.json(response.data);
    }
    catch (error) {
        next(error);
    }
});
realRouter.get('/randomstudent', async function (req, res, next) {
    try {
        const response = await axios_1.default.get('https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters');
        const students = response.data;
        const randomStudent = students[Math.floor(Math.random() * students.length)];
        res.json(randomStudent);
    }
    catch (error) {
        next(error);
    }
});
exports.default = realRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRouter = express_1.default.Router();
/* GET users listing. */
usersRouter.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
exports.default = usersRouter;

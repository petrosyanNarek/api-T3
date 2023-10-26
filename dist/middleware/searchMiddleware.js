"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMiddleware = void 0;
const searchSchema_1 = __importDefault(require("../validation/searchSchema"));
const searchMiddleware = async (req, res, next) => {
    await searchSchema_1.default.validateAsync(req.body).then(() => {
        next();
    }).catch((error) => {
        return res.status(400).send({
            message: error.message
        });
    });
};
exports.searchMiddleware = searchMiddleware;

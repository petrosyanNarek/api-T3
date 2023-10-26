"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const searchController_1 = require("../../controllers/search/searchController");
const searchMiddleware_1 = require("../../middleware/searchMiddleware");
const router = express_1.default.Router();
router.post("/", searchMiddleware_1.searchMiddleware, searchController_1.search);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const PORT = 3002;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', api_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

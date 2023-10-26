"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const fs_1 = __importDefault(require("fs"));
let currentRequest = null;
const search = async (req, res) => {
    try {
        const { email, number } = req.body;
        if (currentRequest) {
            clearTimeout(currentRequest);
        }
        currentRequest = setTimeout(async () => {
            fs_1.default.readFile("./src/data/data.json", 'utf8', (err, data) => {
                if (!err) {
                    const searchesDatum = JSON.parse(data).find((datum) => {
                        return number ? datum.email === email && datum.number == number.replaceAll('-', '') : datum.email === email;
                    });
                    if (searchesDatum) {
                        return res.status(200).send(searchesDatum);
                    }
                    else {
                        return res.status(404).json({
                            message: "Not Found"
                        });
                    }
                }
            });
            currentRequest = null;
        }, 5000);
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
exports.search = search;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const utils_1 = require("../helpers/utils");
exports.default = joi_1.default.object({
    email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'am'] } }).required().messages({
        "any.required": "Email is Required",
        "string.email": "Invalid number format (should be in XX-XX-XX format)",
        "string.empty": "Email can not be Empty",
    }),
    number: joi_1.default.string().pattern(new RegExp(utils_1.numberRegex)).messages({
        "string.empty": "Number can not be Empty",
        "string.pattern.base": "Invalid number format (should be in XX-XX-XX format)"
    }),
});

import Joi from "joi";
import { numberRegex } from "../helpers/utils";

export default Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'am'] } }).required().messages({
        "any.required": "Email is Required",
        "string.email": "Invalid number format (should be in XX-XX-XX format)",
        "string.empty": "Email can not be Empty",
    }),
    number: Joi.string().pattern(new RegExp(numberRegex)).messages({
        "string.empty": "Number can not be Empty",
        "string.pattern.base": "Invalid number format (should be in XX-XX-XX format)"
    }),
});


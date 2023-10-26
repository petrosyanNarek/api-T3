import { Request, Response, NextFunction } from 'express';
import searchSchema from '../validation/searchSchema';

export const searchMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    await searchSchema.validateAsync(req.body).then(() => {
        next();
    }).catch((error) => {
        return res.status(400).send({
            message: error.message
        })
    });
}
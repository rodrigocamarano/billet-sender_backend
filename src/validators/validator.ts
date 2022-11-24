import { Request, Response, NextFunction } from 'express';
import Ajv from '../utils/Ajv';
import shipping from './schemas/shipping';
import CustomError from '../utils/CustomError';

const request = (req: Request, res: Response, next: NextFunction) => {
  const error = Ajv.validate(shipping, req.body);
  if (error instanceof CustomError) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({ error: { validate: JSON.parse(message) } });
  }
  return next();
};

const validate = (req: Request, res: Response, next: NextFunction) => request(req, res, next);

export default validate;

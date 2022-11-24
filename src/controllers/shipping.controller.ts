import { Request, Response } from 'express';

const shipping = async (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
};

export default shipping;

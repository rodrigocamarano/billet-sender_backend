import { Request, Response } from 'express';

const gmail = async (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
};

export default gmail;

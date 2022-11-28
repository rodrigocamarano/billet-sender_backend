import { Request, Response } from 'express';
import NodeMailer from '../services/shipping/NodeMailer';

const shipping = async (req: Request, res: Response) => {
  const nodeMailer = new NodeMailer(req.body);
  await nodeMailer.send().then(() => res.status(200).json({ message: 'Emails sent.' }));
};

export default shipping;
